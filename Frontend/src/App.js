import React, { Component } from 'react';
import logo from './logo.svg';
import TodoApp from './components/TodoApp'
import './App.css';
import './bootstrap.css'

class App extends Component{
  render(){
    return (
      <div className="App">
        <TodoApp/>
      </div>
    );
  }
}

export default App;
