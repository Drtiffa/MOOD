import React from 'react'

const SignIn = () => {
    return (
        <div className="login_block-left">
            <div className="left_content">
                <div className="left_title">
                    <h2>Sign in</h2>
                </div>
                <form className="left_form" method="POST" action="/sign-in">
                    <div className="left-form_element left-form_email">
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" required placeholder="Enter email"></input>
                    </div>
                    <div className="left-form_element left-form_password">
                        <label for="password">Password</label>
                        <input type="text" id="password" name="password" required placeholder="Enter password"></input>
                        <div className="forget-password">
                            <span>Forget password ?</span>
                        </div>
                    </div>
                </form>
                <div className="left_button-signIn">
                    <button className="button_signIn">Sign in</button>
                </div>
                <div className="left_link-create-account">
                    <p>You don't have an account ? <span>Sign up</span></p>
                </div>
            </div>
        </div>
    )
}

export default SignIn