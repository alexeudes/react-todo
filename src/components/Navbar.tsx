import React from 'react';

const Navbar = () => {
    return (
        <div className="uk-container">
            <nav className="uk-navbar">
                <div className="uk-nav-bar-left">
                    <a href="#" rel="noopener noreferrer">My Todos</a>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li><span uk-icon="icon: plus; ratio: 1.3"></span></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;