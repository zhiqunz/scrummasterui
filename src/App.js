import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Button , Alert , Tooltip , ButtonToolbar , OverlayTrigger, Table } from 'react-bootstrap';
import Search from './Search'; 
import Main from './Main';

class App extends Component {
  state = {
    searchName: ''
  };
  
  setSearchName = (searchName) => this.setState({searchName});
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"></p>
        
        <div className="container">
          <Search setSearchName={this.setSearchName}/>
          <Main searchName={this.state.searchName}/>
        </div>
      </div>
    );
  };
};

export default App;
