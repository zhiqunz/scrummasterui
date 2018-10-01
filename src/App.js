import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button , Alert , Tooltip , ButtonToolbar , OverlayTrigger } from 'react-bootstrap';

 const tooltip = (
      <Tooltip id="tooltip">
        <strong>Holy guacamole!</strong> Check this info.
      </Tooltip>
    );

    const positionerInstance = (
      <ButtonToolbar>
        <OverlayTrigger placement="left" overlay={tooltip}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>

        <OverlayTrigger placement="top" overlay={tooltip}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>

        <OverlayTrigger placement="bottom" overlay={tooltip}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={tooltip}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>
      </ButtonToolbar>
    );

class App extends Component {
 


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Alert bsStyle="warning">
          <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
        </Alert>
        {positionerInstance}
      </div>
    );
  }
};

class AlertInstance extends Component {
  render() {
    return (
      <Alert bsStyle="warning">
        <strong>Holy guacamole!</strong> Best check yo self, you're not looking toogood.
      </Alert>
      )
  }
};

class TestApp extends Component {
  render() {
    return (
      <div></div>
      );
  }
};





export default App;
