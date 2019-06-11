import React, {useEffect, useRef} from 'react'
import classes from './Cockpit.css'

const cockpit = props => {
  const toggleBtnRef = useRef(null) //creating a userRef method that is analogous of 
  //createRef but for functional components

  //ALL USEEFECT RUNS AFTER RENDER() 
  useEffect(()=>{//useEffect is called everytime this component is rendered
    console.log('[Cockpit.js] useEffect')    
    //here we can make some http requests for example
    //this return is not a must but optional
    toggleBtnRef.current.click() //executing a click into useEffect (it makes sure that
    //click operation is done only after render runs and thus toggleBtnRef referts to 
    //our button and we can use the click property of a button)
    return ()=>{
      console.log('[Cockpit.js] cleanup work in useEffect')
    }//this return only runs when this component is removed
  //},[props.persons])//Making useEffect execute only when props.persons is defined
},[])//in this case it only runs at the beggining(by default) and when the component
//is unmounted and never more

  useEffect(()=>{//this second useEffect runs ever time the component is rendered
    console.log('[Cockpit.js] 2nd effect')
    return ()=>{
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    }
  })//we do not pass any second argument and thus it is called everytime
  let btnClass = ''
  const assignedClasses = []

  if(props.showPersons){
    btnClass = classes.Red
  }  
  
  if(props.personsLength<=2){
    assignedClasses.push(classes.red)
  }
  if(props.personsLength<=1){
    assignedClasses.push(classes.bold)
  }
  return(
      <div className={classes.Cockpit}>
          <h1>this is an App</h1>
          <p className = {assignedClasses.join(' ')}>This is really working</p>        
          <button
            ref = {toggleBtnRef}
            className={btnClass}
            onClick = {props.clicked}>toggle Person name
          </button>                       
      </div>
  )
}

export default React.memo(cockpit) //React.memo is the analogous to shouldComponentUpdate in class based components.
//be careful to apply Reac.memo here or ShouldComponentUpdate in class based components; if your
//component depends too much on parent component so it is a high percent to render a child component
//then it is not worth to use React.memo or ShouldComponentUpdate.