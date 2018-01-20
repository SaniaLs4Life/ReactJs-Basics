import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TaskCreator from './components/TaskCreator/comp'
import Task from './components/Task/comp'
import TaskList from './components/TaskList/comp'
class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: []
    }
  }
  removeTask(index) {
    const tasks = this.state.tasks.slice(0)
    tasks.splice(index, 1)
    this.setState({
      tasks: tasks
    })
  }
  createTask(e) {
    if (e.which !== 13)
      return    
    const tasks = this.state.tasks.slice(0)
    tasks.push({taskName:e.target.value})
    this.setState({
      tasks:tasks
    })
    
  }
  render() {
    return (
      <div className="row">
        <div className="container">
          <TaskCreator onKeyUpHandler={this.createTask.bind((this))} />
          <TaskList>
            {this.state.tasks.map((task, i) => <Task onClickHandler={this.removeTask.bind(this, i)}  taskName={task.taskName} key={i} />)}
          </TaskList>

        </div>
      </div>
    )
  }
}

export default App
