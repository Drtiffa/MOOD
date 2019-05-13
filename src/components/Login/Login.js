import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ForgetPassword from './ForgetPassword'

const Login = () => {
    return (
        <div class="login_content" method="GET" action="/login">
            <SignIn />
            <SignUp />
            <ForgetPassword />
        </div>
    )
}

export default Login