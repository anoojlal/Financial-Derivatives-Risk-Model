import React, { Component } from 'react';
import MCResponse from './MCResponse';
import LinearScaleResponse from './LinearScaleResponse';

class Question extends Component {
    render() {
        let response;
        switch (this.props.responseType) {
            case "mc":
                response = <MCResponse options={this.props.options}/>;
                break;
            case "linearScale":
                response = <LinearScaleResponse rangeMax={this.props.rangeMax}/>;
                break;
            default:
                response = <p>Invalid responseType prop</p>;
                break;
        }

        return (
            <div>
                <h1>{this.props.question}</h1>
                {response}
            </div>
        );
    }
}
  
export default Question;