import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class MCResponse extends Component {
    render() {
        return (
            <div>
                <FormGroup controlId="formControlsSelect">
                    <FormControl componentClass="select">
                        {this.props.options.map((option) => 
                            <option value={option}>{option}</option>
                        )}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
}
  
export default MCResponse;