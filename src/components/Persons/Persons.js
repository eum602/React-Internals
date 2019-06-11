import React, {PureComponent} from 'react'
import Person from "./Person/Person"
class Persons extends PureComponent {

  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps')
  //   return state
  // }

  // shouldComponentUpdate(){
  //   //removed
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Persons.js] shouldComponentUpdate')
  //   if(
  //     nextProps.persons!==this.props.persons || 
  //     nextProps.changed !== this.props.changed || 
  //     nextProps.ckicked !== this.props.ckicked){
  //     //only renders this component when properties really change
  //     //take in mind the comparison is between pointers to objects in memory (see lecture 95 explanation)
  //     return true
  //   }
  //   return false; //jere we should do some verification to retur true or false so that
  //   //the update process occurs or not
  // }

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
      click = {() => this.props.clicked(index)}
      key = {person.id}
      changed = {event => this.props.changed(event,person.id)} />
      }
    )

  }
  
}
export default Persons