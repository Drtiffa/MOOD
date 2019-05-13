import React from 'react'

const SignUp = () => {
    return (
        <div className="login_block-right">
            <div className="right_content">
                <div className="right_title">
                    <h2>Sign up</h2>
                </div>
                <form className="right_form" method="POST" action="/sign-up">
                    <div className="right-form_element right-form_email">
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" required placeholder="Enter email"></input>
                    </div>
                    <div className="right-form_element right-form_password">
                        <label for="password">Password</label>
                        <input type="text" id="password" name="password" required placeholder="Enter password"></input>
                    </div>
                    <div className="right-form_element right-form_password">
                        <label for="confirmed_password">Confirmed password</label>
                        <input type="text" id="confirmed_password" name="confirmed_password" required placeholder="Confirmed password"></input>
                    </div>
                </form>
                <div className="right_button-signUp">
                    <button className="button_signUp">Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp