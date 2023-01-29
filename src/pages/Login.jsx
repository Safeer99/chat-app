import React from 'react'

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat</span>
        <span className="title">Login</span>
        <form>
          <input placeholder="email" type="email" name="email" id="email" />
          <input placeholder="password" type="password" name="pass" id="pass" />
          <button type="submit">Sign in</button>
        </form>
        <p>Don't have an account ? Register</p>
      </div>
    </div>
  )
}

export default Login
