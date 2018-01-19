import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super()
        this.state = {
            name: props.user.name
        }
    }
    onMakeOlder() {
        this.setState({
            name: this.state.name + 3
        })
    }
    render() {
        return (
            <div className="row">
                <div className="container">
                    <div class="card text-center">
                        <div class="card-header list-group-item-info">
                            ReactJS Basics
        </div>
                        <div class="card-body">
                            <h5 class="card-title">Todo List</h5>
                            <p class="card-text">Add your todo list</p>
                            <input type="text" className="form-control input-sm" placeholder="Enter some text" />
                            <a href="/#" onClick={this.onMakeOlder.bind(this)} class="btn btn-warning">Add</a>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item list-group-item-info">YOUR TODO LIST - @{this.state.name}</li>
                        </ul>
                        <ul class="list-group">
                            {this.props.user.todo.map((todolist, i) => <li key={i} class="list-group-item">{todolist}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;