import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Button , Alert , Tooltip , ButtonToolbar , OverlayTrigger } from 'react-bootstrap';

// import { BrowserRouter as Router, Route , Link } from "react-router-dom";

// import SampleRouter from "./SampleRouter"

// ReactDOM.render(<TestApp />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
