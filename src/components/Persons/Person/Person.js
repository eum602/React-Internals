import React, {Component} from "react"
import classes from "./Person.css"
class Person extends Component {
    render(){
        console.log('[Person.js] rendering...')
        return (
            [
                <p key="1" onClick = {this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>,
                <p key="2" >{this.props.children}</p>,
                <input key="3" onChange = {this.props.changed} value = {this.props.name} />
            ]
            
        )
    }
    
}
export default Person;