
import React, {useState, useEffect, useRef} from 'react';
import './css/style.css'
import Header from './components/Header'
import User from './components/User'

function App() {

  const [user, setUser]= useState(null)

  const inputRef = useRef()

  const searchNewUser = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value); 
    // shows next user in console, not browser
    if(inputRef.current.value.trim() !== ""){
    fetchUserProfile(inputRef.current.value)
    }
    inputRef.current.value=""
  }

  useEffect(()=>{
    fetchUserProfile("hbolouri")
  }, [])

  const fetchUserProfile= async(username)=> {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const result = await response.json()
    setUser(result)
  }

console.log('==========render================');

  return (
    <div className="App">
      <Header/>
      <form onSubmit={searchNewUser}>
        <input type="text" name="username" ref={inputRef} />
        <input type="submit" value="search" />
      </form>
      {user && <User userdata={user}/>}
    </div>
  );
}


export default App;