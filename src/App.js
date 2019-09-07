import React from 'react';
import logo from './logo.svg';
import './App.css';
import Typist from 'react-typist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typist cursor={{ show: false }}>
          <span>Hello, </span>
          <Typist.Delay ms={1000} />
          <span>Iam a Dev</span>
          <Typist.Backspace count={5} delay={400} />
          <span>Jacob</span>
          <Typist.Delay ms={1500} />

          <div>
            <p>I am a Full Stack Developer..</p>
          </div>
        </Typist>
      </header>
    </div>
  );
}

export default App;
