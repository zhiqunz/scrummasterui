import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button , Alert , Tooltip , ButtonToolbar , OverlayTrigger } from 'react-bootstrap';

import { BrowserRouter as Router, Route , Link } from "react-router-dom";

// import SampleRouter from "./SampleRouter"

const tooltip1 = (
      <Tooltip >
        <strong>Holy guacamole!</strong> Check this info.
      </Tooltip>
    );

const positionerInstance = (
	<div>
      <ButtonToolbar>

    	<Button bsStyle="primary">Primary</Button>

        <OverlayTrigger placement="left" overlay={tooltip1}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>

        <OverlayTrigger placement="top" overlay={tooltip1}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>

        <OverlayTrigger placement="bottom" overlay={tooltip1}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={tooltip1}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>
      </ButtonToolbar>
      </div>
    );

const tttt = (
<div>
  <Tooltip placement="right" className="in" id="tooltip-right">
    Tooltip right
  </Tooltip>

  <Tooltip placement="top" className="in" id="tooltip-top">
    Tooltip top
  </Tooltip>

  <Tooltip placement="left" className="in" id="tooltip-left">
    Tooltip left
  </Tooltip>

  <Tooltip placement="bottom" className="in" id="tooltip-bottom">
    Tooltip bottom
  </Tooltip>
</div>
	)


class BasicExample extends Component {
  render(){
    return (
      <div>
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
    </div>
    )
  }
};


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);


// ReactDOM.render(<TestApp />, document.getElementById('root'));
ReactDOM.render(<BasicExample />, document.getElementById('root'));
registerServiceWorker();
