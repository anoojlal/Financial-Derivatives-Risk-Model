import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert, Button, ButtonGroup, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Question from './Question';
import MCResponse from './MCResponse';
import LinearScaleResponse from './LinearScaleResponse';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" id="welcome">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Question question="What's your favorite food?"/>
        <MCResponse />
        
        <br />

        <Question question="What's your favorite color?"/>
        <LinearScaleResponse />

        <ButtonGroup justified>
          <Button href="#">Left</Button>
          <Button href="#">Middle</Button>
          <Button href="#">Right</Button>
        </ButtonGroup>

      </div>
    );
  }
}

export default App;
