import React, { Component } from 'react';
import Todos from './components/Todos'

import './App.css';

class App extends Component {

  state = {
    todos: [{
      id: 1,
      title: 'AJFLDKA',
      completed: false
    },
    {
      id: 2,
      title: 'AJFFDSFALDKA',
      completed: false
    },
    {
      id: 3,
      title: 'AJFLHGKHGDKA',
      completed: false
    }]
  }


  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
