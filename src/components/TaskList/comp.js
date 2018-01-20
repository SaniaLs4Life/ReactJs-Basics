import React, { Component } from 'react';

class TaskList extends Component {
    render() {
        return (
                <ul class="list-group">
                    {this.props.children}
                </ul>
        );
    }
}

export default TaskList;