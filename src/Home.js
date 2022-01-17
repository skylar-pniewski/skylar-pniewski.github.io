import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';

const e = React.createElement;

class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log("HELLO");
    }

    render() {
        console.log("render home");
        return (
            <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        );
    }
}

export default Home;