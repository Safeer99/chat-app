import React from 'react'
import Add from '../img/add.png'

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat</span>
        <span className="title">Register</span>
        <form>
          <input placeholder="Enter name" type="text" name="text" id="name" />
          <input placeholder="email" type="email" name="email" id="email" />
          <input placeholder="password" type="password" name="pass" id="pass" />
          <input style={{ display: 'none' }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button type="submit">Sign up</button>
        </form>
        <p>You do have an account ? Login</p>
      </div>
    </div>
  )
}

export default Register
