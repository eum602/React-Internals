import React, { Component } from 'react'
import Persons from "../components/Persons/Persons"
import Cockpit from '../components/Cockpit/Cockpit'
import classes from "./App.css"
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux'
import AuthContext from '../context/auth-context'

class App extends Component {
  constructor(props){
    super(props)
    console.log('[App.js] constructor')
  }
  state = {//this basically do the same as constructor; stating variables can be done here or into
    //the constructor
    persons : [
      {id:"fsaf",name:"Erick",age:25},
      {id:"dg35tg",name:"Jorge",age:48},
      {id:"fdg567",name:"David",age:32}
    ],
    showPersons :false,
    showCockpit:true,
    changeCounter:0,
    authenticated:false
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props)
    return state
  }



  togglePersonHandler = () => {
    const showPersons = this.state.showPersons
    this.setState({showPersons:!showPersons})
  }

  loginHandler = () =>{
    this.setState({authenticated:true})
  }

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons.slice()
    const persons = [...this.state.persons] //haciendo una verdadera copia y no un pointer
    //que podria devenir en resultados inesperados en algunas compilaciones.
    persons.splice(personIndex,1)
    this.setState({persons})
  }

  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    })
    const person = {...this.state.persons[personIndex]}
    //const person = Object.assign({},this.state.persons[personIndex])
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState((prevState, props)=>{
      return {
        persons,
        changeCounter: prevState.changeCounter+1 //this guaratee you update the actual previousState
      }
    })
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount')
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate')
    return true
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate')
  }

  render() {
    console.log('[App.js] render')
    let persons = null  
    if (this.state.showPersons){
      persons = (
        <Persons 
          persons = {this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          isAuthenticated={this.state.authenticated}
        />
      )
    }
    return (
      <Aux>
        <button onClick={()=>{this.setState({showCockpit:false})}}>Remove Cockpit</button>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
        }}>
          {this.state.showCockpit===true?<Cockpit            
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonHandler}
            />:null}
            {persons}
        </AuthContext.Provider>
      </Aux>
    )
    //return React.createElement("div",{className:"App"},React.createElement("h1",null,"This is an app"))
  }
}

export default withClass(App,classes.App);
