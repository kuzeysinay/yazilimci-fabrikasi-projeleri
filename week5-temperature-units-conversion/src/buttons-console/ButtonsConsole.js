import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import Decrease from "./Decrease";
import Increase from "./Increase";
import './console.css';

class ButtonsConsole extends Component {
    
  render() {
    return (
      <div>
        <Container className="console">
          <Row>
          <Col xs="4">
            <Decrease a= {this.props.temperature} />
          </Col>
          <Col xs="4">
            <h1>
            
            </h1>
          </Col>
          <Col xs="4">
            <Increase a = {this.props.temperature} />
          </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ButtonsConsole;
