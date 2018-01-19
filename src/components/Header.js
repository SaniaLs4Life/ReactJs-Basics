import React, { Component } from 'react'
const Header = ({homeLink}) => {
    return (
        <div className="row">
            <div className="container">
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container">
                        <ul className="nav navbar-nav">
                            <li><a href="/#">{homeLink}</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

    )

}

export default Header