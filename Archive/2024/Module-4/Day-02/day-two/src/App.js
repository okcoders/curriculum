import React, {useState, useEffect} from 'react'
import './App.css';
import Spinner from './components/Spinner';
import SignIn from './components/SignIn';
import Main from './components/Main';

function App() {

  const initialCount = Number(localStorage.getItem("stored_count")) || 0;

  const [isLoading, setIsLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [clickCount, setClickCount] = useState(initialCount)
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    let localStorageUsername = localStorage.getItem('userName');
    if(localStorageUsername && localStorageUsername.length > 0){
      setUserName(localStorageUsername)
      setClickCount(initialCount)
      handleLoading()
      handleSignIn(true)
    }
  },[])

  function handleSetUserName(e){
    console.log('e in handleSetUserName', e)
    setUserName(e)
  }

  function handleSetPassword(e){
    setPassword(e)
  }

  function handleSignIn(bool){
    setIsSignedIn(bool)
  }

  function handleLoading(){
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 3000)
  }

  function handleClicks(){
    let currentClickCount = clickCount;
    currentClickCount++
    setClickCount(currentClickCount)
  }

  function handleSaveClickCount(){
    localStorage.setItem('clickCount', clickCount)
    alert('Click count saved')
  }

  function handleResetClickCount(){
      localStorage.setItem('clickCount', 0)
      setClickCount(0)
      alert('Click count reset')
  }

  function handleSignout(){
    handleSetUserName('')
    handleSetPassword('')
    setClickCount(0)
    localStorage.clear()
    setIsSignedIn(false)
  }


  return isLoading ? (
    <Spinner />
  ) 
  : 
  isSignedIn ?
  (
    <Main clickCount={clickCount} handleClicks={handleClicks} handleSaveClickCount={handleSaveClickCount} handleResetClickCount={handleResetClickCount} handleSignout={handleSignout} />
  )
  :
  (
    <>
      <SignIn handleSignIn={handleSignIn} handleLoading={handleLoading} handleSetUserName={(e) => handleSetUserName(e)} handleSetPassword={(e) => handleSetPassword(e)} password={password} username={username} />
    </>
  )
}

export default App;
