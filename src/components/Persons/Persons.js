import React from 'react'
import Person from "./Person/Person"
const persons = props=>props.persons.map((person,index) => {//index es una propiedad de map que me devuelve el indice
    //en el array
      return <Person 
      name = {person.name}
      age = {person.age}
      click = {() => props.ckicked(index)}
      key = {person.id}
      changed = {event => props.changed(event,person.id)} />
    })
export default persons