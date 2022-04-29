import React, {useState} from 'react';

function Login({setAuthUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function enterUsername(e){
    setUsername(e.target.value)
  }
  function enterPassword(e){
    setPassword(e.target.value)        
  }

  function loginSubmit(e) {
    e.preventDefault();

    const user = {
      username: username,
      password: password
    }
    fetch('./login',{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(user)
      })
      .then(r => r.json())
      .then(setAuthUser)
      setUsername("")
      setPassword("")
  }
    return (
      <div className="Login">
        <form onSubmit={loginSubmit}>
          <p>Login</p>
          <input
            type="text"
            id="username"
            value={username}
            onChange={enterUsername}
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={enterPassword}
          />
          <button type="submit">Login</button>
      </form>
      </div>
    );
  }
  
  export default Login;