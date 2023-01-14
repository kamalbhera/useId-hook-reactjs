import React, {useId} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const id = useId();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - {id}
        </a>
        <form>
          <label htmlFor={`email-${id}`}>Email</label>
          <input type="text" id={`email-${id}`} name="email" />

          <label htmlFor={`password-${id}`}>Password</label>
          <input type="password" id={`password-${id}`} name="password" />
        </form>
      </header>
    </div>
  );
}

export default App;
