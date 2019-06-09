import React, {useEffect} from 'react'
import classes from './Cockpit.css'

const cockpit = props => {
  useEffect(()=>{//useEffect is called everytime this component is rendered
    console.log('[Cockpit.js] useEffect')
    //here we can make some http requests for example
  //},[props.persons])//Making useEffect execute only when props.persons is defined
},[])//in this case it only runs at the beggining(by default) and never more
  let btnClass = ''
  const assignedClasses = []

  if(props.showPersons){
    btnClass = classes.Red
  }  
  
  if(props.persons.length<=2){
    assignedClasses.push(classes.red)
  }
  if(props.persons.length<=1){
    assignedClasses.push(classes.bold)
  }
  return(
      <div className={classes.Cockpit}>
          <h1>this is an App</h1>
          <p className = {assignedClasses.join(' ')}>This is really working</p>        
          <button 
            className={btnClass}
            onClick = {props.clicked}>toggle Person name
          </button>                       
      </div>
  )
}

export default cockpit