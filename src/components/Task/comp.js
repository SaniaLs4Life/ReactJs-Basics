import React, { Component } from 'react';

class Task extends Component {
    render() {
        return (
                <li class="list-group-item" onClick={this.props.onClickHandler} >
                    {this.props.taskName}
                </li>
        );
    }
}

export default Task;