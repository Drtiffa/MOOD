import React from 'react'
import { Route } from 'react-router-dom'
import Content from './Home/Content'
import Login from './Login/Login'

const Main = () => (
    <div>
        <Route exact path='/' component={Content}/>
        <Route path='/login' component={Login}/>
    </div>
)


export default Main