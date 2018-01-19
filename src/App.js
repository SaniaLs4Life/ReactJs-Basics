import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import  Header from './components/Header'
import TodoList from './components/TodoList'
class App extends Component {
  render() {
    const user = {
      name: "Hakan",
      todo: ["Programming", "Studying", "Shopping", "Cooking"],
      age : 23
    }
    return (
      <div>
        <Header />
        <TodoList user={user}  />
      </div>
    )
  }
}

export default App
