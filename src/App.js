import React, { Component } from 'react';
import './App.css';

import { FormWrapper, ConnectedFormWrapper } from './components/FormWrapper'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Connected, wrapped <code>Form</code></h2>
        <ConnectedFormWrapper />
        <h2>Unconnected, wrapped <code>Form</code></h2>
        <FormWrapper />
      </div>
    );
  }
}

export default App;
