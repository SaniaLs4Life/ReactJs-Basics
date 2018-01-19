import React, { Component } from 'react';

class TodoList extends Component {
    constructor({user}) {
        super()
        this.state = {
            name: user.name,
            homeLink:'Home Page'
        }

        //Timer
        /*setTimeout(() => {
            this.setState({
                name:"Hakan Genc"
            })
        }, 2000)*/
    }
    

    onChangeLink(newLink){
        this.setState({
            name: 'Hello, ' + this.state.name
        })
    }
    onHandleChange(event){
        this.setState({
            newLink : event.target.value
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
                            <input type="text" className="form-control input-sm" value={this.state.name} onChange={(event) => this.onHandleChange(event) } placeholder="Enter some text" />
                            <a href="/#" onClick={this.onChangeLink.bind(this)} class="btn btn-warning">Add</a>
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