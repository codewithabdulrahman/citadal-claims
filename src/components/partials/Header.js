import React from 'react';

function Header() {
    return (
        <div className="Header">
            <nav className="navbar navbar-expand-md navbar-light navbar-laravel">
                <div className="container"><a href="#" className="navbar-brand">
                    Citadel Claims
                </a>
                    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                            className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
                    <div id="navbarSupportedContent" className="collapse navbar-collapse">
                        <ul className="navbar-nav right-menu">
                            <li><a href="/login" className="nav-link">Login</a></li>
                            <li><a href="/register" className="nav-link">Register</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
