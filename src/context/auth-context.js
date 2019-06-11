import React from 'react'

const authContext = React.createContext({
    authenticated:false,
    login: ()=>{}
}) //by using context we can actually initialize with some values
//context is a globally available javascript object; to be more precise you can decide
//where it is available

export default authContext