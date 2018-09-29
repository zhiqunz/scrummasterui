import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button , Alert , Tooltip , ButtonToolbar , OverlayTrigger } from 'react-bootstrap';

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

// ReactDOM.render(<TestApp />, document.getElementById('root'));
ReactDOM.render(positionerInstance, document.getElementById('root'));
registerServiceWorker();
