import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './styles/login.css'

const Login = () => {

  const navigate = useNavigate()

  const [isLogged, setIsLogged] = useState(false) 

  const {handleSubmit, register, reset} = useForm()

  const submit = data => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/login'
    axios.post(URL, data)
        .then(res => {
            console.log(res.data.data)
            localStorage.setItem('token', res.data.data.token)
            setIsLogged(true)
            navigate('/')
        })
        .catch(err => console.log(err))

        reset({
            email:'',
            password:''
        })
  }

  useEffect(() => {
    const condition = localStorage.getItem('token') ? true : false
    setIsLogged(condition)
  }, [])

  console.log(isLogged)

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLogged(false)
  }

  if (isLogged) {
    return (
        <div className='card'>
          <button className='card_avatar'><i className=" avatar fa-regular fa-user"></i></button>
            <h1 className='card_title'>User Logged</h1>
            <button className='card_btn' onClick={handleLogout}>Logout</button>
        </div>
    )
  }

  return (
    <div className='login-container'>
      <div className='main-container'>
        <form className='login' onSubmit={handleSubmit(submit)}>
            <strong className='login_strong'>Welcome! Enter your email and password to continue</strong>
            <div className='input-container'>
                <label className='labels' htmlFor="email">Email</label>
                <input className='inputs' type="text" id='email' {...register('email')}/>
            </div>
            <div className='input-container'>
                <label className='labels' htmlFor="password">Password</label>
                <input className='inputs' type="password" id="password" {...register('password')} />
            </div>
            <button className='login_btn'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login