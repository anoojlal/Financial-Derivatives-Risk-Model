import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import Question from './Question';
import Data from './../Questions.json';


class App extends Component {
  constructor(props) {
    super(props);

    const responses = Data;
    let score = 0;
    let total = 0;

    responses.map(function(question) {
      question.selectedResponse = question.options[0];
      score += question.points * (question.selectedResponse.discount / 100);
      total += question.points;
    });

    this.state = {
      responses: responses,
      score: score,
      total: total 
    };

    this.handleResponseChange = this.handleResponseChange.bind(this);
  }

  handleResponseChange(questionId, optionId) {
    const oldValue = this.state.responses[questionId].points * 
    (this.state.responses[questionId].selectedResponse.discount / 100);

    this.state.responses[questionId].selectedResponse = 
    this.state.responses[questionId].options[optionId];

    const newValue = this.state.responses[questionId].points * 
    (this.state.responses[questionId].selectedResponse.discount / 100);

    this.setState({
      score: this.state.score - oldValue + newValue
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" id="welcome">Risk Model</h1>
        </header>

        {this.state.responses.map((question) => 
            <Question 
              question={question.question} 
              id={question.id}
              options={question.options}
              handleResponseChange={this.handleResponseChange}
            />
        )}

        <h1>Score: {this.state.score} / {this.state.total}</h1>
      </div>
    );
  }
}

export default App;