//signin form, save name and password in localstorage

import React from 'react'


export default function SignIn(props) {

    function setLocalStorage(){
        if(!props.username || props.username.length < 0){
            return alert('Username is required')
        }
        if(!props.password || props.password.length < 0){
            return alert('Password is required')
        }
        localStorage.setItem("userName", props.username)
        localStorage.setItem("password", props.password)
        props.handleSignIn(true)
        props.handleLoading()
    }

  return (
    <>
        <h1>Welcome to Clicker Company</h1>
        <h4>The company where you click</h4>
        <p>Username: <input value={props.username} onChange={(e) => {
            console.log('e in input', e)
            props.handleSetUserName(e.target.value)
        }} /></p>
        <p>Password: <input type="password" value={props.password} onChange={(e) => props.handleSetPassword(e.target.value)} /></p>
        <button onClick={setLocalStorage}>Get Clicking!</button>
    </>
  )
}
