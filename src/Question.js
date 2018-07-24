import React, { Component } from 'react';

class Question extends Component {
    render() {
        return (
        <div>
            <h1>Here's a question: {this.props.question}</h1>
        </div>
        );
    }
}
  
export default Question;