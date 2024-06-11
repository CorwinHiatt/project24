import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <div className="header-content">
                <h1>Welcome to My Website</h1>
                <p>Discover the amazing features</p>
                <button>Get Started</button>
            </div>
        </header>
    );
};

export default Header;