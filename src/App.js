import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
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
              <a href="#" class="btn btn-warning">Add</a>
            </div>
            <ul class="list-group">
              <li class="list-group-item list-group-item-info">YOUR TODO LIST</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Morbi leo risus</li>
              <li class="list-group-item">Porta ac consectetur ac</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
