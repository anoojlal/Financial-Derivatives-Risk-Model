import React, { Component } from 'react';
import './../styles/App.css';
import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';
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

    const delta = newValue - oldValue;

    this.setState({
      score: this.state.score + delta
    });
  }

  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button bsStyle="primary">Learn more</Button>
          </p>
        </Jumbotron>

        <Grid>
          <Row className="show-grid">
            <Col md={1}>
            </Col>
            <Col md={2}>
              Market
            </Col>
            <Col md={2}>
              Cashflow
            </Col>
            <Col md={2}>
              Credit
            </Col>
            <Col md={2}>
              Operational
            </Col>
            <Col md={2}>
              Legal
            </Col>
          </Row>

        <Row>
        {this.state.responses.map(question =>
          <Col md={6}>
            <Question 
              question={question.question} 
              id={question.id}
              options={question.options}
              handleResponseChange={this.handleResponseChange}
            />
          </Col>
        )}
        </Row>

        </Grid>

        <h1>Score: {this.state.score} / {this.state.total}</h1>
      </div>
    );
  }
}

export default App;