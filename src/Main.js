import React from 'react';

import logo from "./logo.svg";

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = { questions: [] }
  }

  componentDidMount() {
    fetch('http://localhost:8080/v1/users',
      {
        method: 'get',
        headers: new Headers({
          'Authorization': 'Basic ' + btoa('test:test')
        })
      })
      .then(response => response.json())
      .then(json => this.setState({ questions: json }))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/YourMom.js</code> and save to reload.
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
        <div>
          <textarea style={{background: 'white'}} readOnly={true} value={JSON.stringify(this.state)} />

        </div>
      </div>
    );
  }
}

export default Main;