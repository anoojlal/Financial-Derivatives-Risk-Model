import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class Question extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            question: this.props.question,
            id: this.props.id,
            options: this.props.options
        };
    }

    render() {
        return (
            <div>
                <h2>{this.state.question}</h2>
                <FormGroup controlId="formControlsSelect">
                    <FormControl 
                        componentClass="select" 
                        onChange={event => 
                            this.props.handleResponseChange(this.state.id, 
                                event.target.options.selectedIndex)}
                    >
                        {this.state.options.map((option) => 
                            <option value={option.option} id={option.id}>
                                {option.option}
                            </option>
                        )}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
}
  
export default Question;