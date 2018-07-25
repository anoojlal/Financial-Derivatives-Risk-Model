import React, { Component } from 'react';
import { FormGroup, Radio } from 'react-bootstrap';

class LinearScaleResponse extends Component {
    render() {
        return (
            <div>
                <FormGroup>
                    {Array.from(new Array(this.props.rangeMax + 1), (x, i) => 
                        <Radio name="radioGroup" inline>
                            {i}
                        </Radio>
                    )}
                </FormGroup>
            </div>
        );
    }
}
  
export default LinearScaleResponse;