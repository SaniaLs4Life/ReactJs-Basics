import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import TodoList from './components/TodoList'
class App extends Component {
  constructor() {
    super()
    this.state = {
      newItem: 'Partying!'
    }
  }
  onFetchItem(newName) {
    this.setState({
      newItem: newName
    })
  }

  render() {
    const user = {
      name: "Hakan",
      todo: ["Programming", "Studying", "Shopping", "Cooking"],
      age: 23
    }
    return (
      <div>
        <Header homeLink="Home" />
        <TodoList
          user={user}
          item={this.state.newItem} />
      </div>
    )
  }
}

export default App
