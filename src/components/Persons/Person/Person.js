import React, {Component} from "react"
import PropTypes from 'prop-types'
import classes from "./Person.css"
import Aux from "../../../hoc/Aux"
import withClass from "../../../hoc/withClass"
import AuthContext from "../../../context/auth-context"
class Person extends Component {
    constructor(props){
        super(props)
        this.inputElementRef = React.createRef() //inputElement can hava any other name
    }

    static contextType = AuthContext //static means that it can be accessed by outside without the need to 
                        //instantiate an object based on this class Person.
    componentDidMount(){
        //this.inputEl.focus()
        this.inputElementRef.current.focus() //selecting the current inputElement and in there using
        //focus

        console.log(this.context.authenticated)
    }
    render(){
        console.log('[Person.js] rendering...')
        return (
            <Aux>
                {this.context.authenticated===true?<p>Authenticated</p>:<p>Please Login</p>}
                <p onClick = {this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input 
                    onChange = {this.props.changed} 
                    value = {this.props.name}
                    type="text"
                    ref={this.inputElementRef} />
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
export default withClass(Person,classes.Person)