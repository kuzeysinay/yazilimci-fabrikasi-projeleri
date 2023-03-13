import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import './indicators.css'

class Indicator extends Component {
    render() {
        return (
            <div>
                <Container className='table' >
                    <Row>
                        <div className='icon'>
                        {this.props.icon}
                        </div>
                    </Row>
                    <Row>

                    </Row>
                </Container>
            </div>
        );
    }
}

export default Indicator;