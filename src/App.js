import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import Question from './Question';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" id="welcome">Risk Model</h1>
        </header>

        <Question question="What's your favorite food?" responseType="mc" options={['Yes', 'No']}/>
        <Question question="What's your favorite color?" responseType="linearScale" rangeMax={10} />

        <ButtonToolbar>
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    );
  }
}

export default App;
