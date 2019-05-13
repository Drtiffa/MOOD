import React from 'react'

const ForgetPassword = () => {
    return (
        <div className="login_forget-password">
            <div className="forget-password_content">
                <div className="forget-password_title">
                    <h2>Forget <br></br> password</h2>
                </div>
                <form className="forget-password_form" method="POST" action="/forget-password">
                    <div className="forget-form_element forget-form_email">
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" required placeholder="Enter email"></input>
                    </div>
                </form>
                <div className="forget_button-submit">
                    <button className="button_submit">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword