import React, { Component } from 'react'
class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="container">
                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container">
                            <ul className="nav navbar-nav">
                                <li><a href="/#">Home</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

        )
    }
}

export default Header