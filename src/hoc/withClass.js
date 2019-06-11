import React from 'react'

const withClass = (WrappedComponent, className) => {
    //returning a wrapper component
    return props => (
        <div className= {className}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default withClass