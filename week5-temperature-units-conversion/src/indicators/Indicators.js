import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import {TbTemperatureFahrenheit, TbTemperatureCelsius } from 'react-icons/tb';
import Indicator from './Indicator';
import './indicators.css';



class Indicators extends Component {
    state = {
        f: <TbTemperatureFahrenheit/>,
        c: <TbTemperatureCelsius/>,
        k: "Kelvin",
    };
    render() {
        return (
            <div>
                <Container className='indicators'>
                    <Row>
                        <Col xs='4'>
                            <Indicator icon = {this.state.f}/>
                            
                        </Col>
                        <Col xs='4'>
                            <Indicator icon = {this.state.c}/>

                        </Col>
                        <Col xs='4'>
                            <Indicator icon = {this.state.k}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Indicators;