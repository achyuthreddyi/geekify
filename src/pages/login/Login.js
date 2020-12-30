import React from 'react'
import { loginUrl } from '../../spotify'
import './Login.css'

function Login () {
  return (
    <div className='login'>
      <h1 className='login__logo'>geekify</h1>
      <a href={loginUrl}> login with spotify</a>
    </div>
  )
}

export default Login
