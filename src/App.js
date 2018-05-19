import React, { Component } from 'react';
// import {
//   Button, Modal, ModalHeader, ModalBody,
//   ModalFooter, Form, FormGroup, Label, Input
// } from 'reactstrap';
// import fontawesome     from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import faCoffee        from '@fortawesome/fontawesome-free-solid/faCoffee'

import './App.css';

// fontawesome.library.add(faCoffee);
// <FontAwesomeIcon icon="coffee" />
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<FontAwesomeIcon icon="coffee" />*/}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }


}

export default App;
