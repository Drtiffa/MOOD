import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="mood_nav">
            <div className="mood_logo">
                <Link to='/'>Mood</Link>
            </div>
            <div className="mood_text-intro">
                <h1>Create your avatar</h1>
            </div>
            <div className="mood_login">
                <a href="/login"><button className="mood_login-button">Login</button></a> 
            </div>
        </div>
    )
}

export default Header