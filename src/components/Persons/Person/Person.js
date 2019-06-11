import React, {Component} from "react"
import PropTypes from 'prop-types'
import classes from "./Person.css"
import Aux from "../../../hoc/Aux"
import withClass from "../../../hoc/withClass"
class Person extends Component {
    componentDidMount(){
        this.inputEl.focus()
    }
    render(){
        console.log('[Person.js] rendering...')
        return (
            <Aux>
                <p onClick = {this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input 
                    onChange = {this.props.changed} 
                    value = {this.props.name}
                    type="text"
                    ref={inputEl=>{this.inputEl=inputEl}} />
            </Aux>
        )
    }
    
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
export default withClass(Person,classes.Person);