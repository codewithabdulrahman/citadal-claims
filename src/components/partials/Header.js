import React from 'react';

function Header() {
    return (
        <div className="Header">
            <nav className="navbar navbar-expand-md navbar-light navbar-laravel pl-4 pr-4">
                <a className="navbar-brand" href="#">Citadel Claims</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav right-menu">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;
