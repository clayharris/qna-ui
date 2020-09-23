import React from 'react';
import QuestionList from "./components/QuestionList";
import * as axios from "axios";

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = { questions: [] }
  }

  componentDidMount() {
    // fetch('http://localhost:8080/v1/users',
    //   {
    //     method: 'get',
    //     headers: new Headers({
    //       'Authorization': 'Basic ' + btoa('test:test')
    //     })
    //   })
    //   .then(response => response.json())
    //   .then(json => this.setState({ questions: json }))
    //   .catch(err => console.error(err))
    const options = {
      url: 'http://localhost:8080/questions'
    }
    axios(options)
      .then(res => {
        this.setState({questions: res.data})
      })
  }

  render() {
    const questions = this.state;
    return (
      <div className="App">
        <header className="App-header">
          Questions!
        </header>
        <div>
          <QuestionList questions={Array.from(questions)} />

        </div>
      </div>
    );
  }
}

export default Main;