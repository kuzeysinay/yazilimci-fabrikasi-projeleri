import { Container, Row, Col, Button } from "reactstrap";
import Increase from "./buttons-console/Increase";
import Decrease from "./buttons-console/Decrease";
import Indicators from "./indicators/Indicators";
import ButtonsConsole from "./buttons-console/ButtonsConsole";

import React, { Component } from 'react';

class App extends Component {
  state = {
    temperature: 24
  }
  render() {
    return (
      <div>
        <Container>
        <Row>
          <ButtonsConsole temp = {this.state.temperature}></ButtonsConsole>
        </Row>
        <Row>
          <Indicators></Indicators>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
