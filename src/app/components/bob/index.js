import React, { Component } from 'react';
import './bob.css';

class Bob extends Component {
  render() {
    return (
      <div className="bob">
        <header className="bob-header">
          <h1 className="bob-title">Bob</h1>
        </header>
        <p className="bob-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Bob;
