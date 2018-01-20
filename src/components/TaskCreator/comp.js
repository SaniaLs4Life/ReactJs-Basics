import React, { Component } from 'react';

class TaskCreator extends Component {
    render() {
        return (
            <div class="card-body">
                <h5 class="card-title">Todo List</h5>
                <p class="card-text">New Task : </p>
                <input type="text" onKeyUp={this.props.onKeyUpHandler} className="form-control input-sm" placeholder="Enter a task name" />
            </div>
        );
    }
}

export default TaskCreator;