import React from 'react'

const Login = () => {
  return (
    <section className='login-section'>
      <div className="container">
        <form action="">
          <h1 className="ff-secondary fw-regular fs-2xl text-dark">
            Welcome to Little Lemon!
          </h1>
          <div className="login-field">
            <label className='login-label' htmlFor="username">Username<sup>*</sup></label>
            <input type="text" name="username" id="username" placeholder='ex. johndoe' />
          </div>
          <div className="login-field">
            <label className='login-label' htmlFor="password">Password <sup>*</sup></label>
            <input type="password" name="password" id="password" placeholder='ex. 1232@153asda' />
          </div>
          <div className="btns">
            <button className='btn-dark'>Login</button>
            <button className='btn-dark'>Register!</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login