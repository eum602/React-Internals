import React, {Component} from 'react'
import Person from "./Person/Person"
class Persons extends Component {

  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps')
  //   return state
  // }

  // shouldComponentUpdate(){
  //   //removed
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate')
    return true; //jere we should do some verification to retur true or false so that
    //the update process occurs or not
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate')
    //return null 
    return {message: "snapshot"} //the info saved here is sent to componentDidUpdate after updating process.
  }

  // componentWillUpdate(){
    //removed
  // }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('[Persons.js] componentDidUpdate')
    console.log(snapshot)
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount')
  }
  render(){
    console.log('[Persons.js] rendering...')
    return this.props.persons.map((person,index) => {//index es una propiedad de map que me devuelve el indice
    //en el array      
      return <Person 
      name = {person.name}
      age = {person.age}
      click = {() => this.props.ckicked(index)}
      key = {person.id}
      changed = {event => this.props.changed(event,person.id)} />
      }
    )

  }
  
}
export default Persons