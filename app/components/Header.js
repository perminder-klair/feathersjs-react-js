import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div className="ui fixed inverted menu">
            <div className="ui container">
                <div className="header item">
                    React Starter
                </div>
                <Link className="item" to="/">Home</Link>
                <Link className="item" to="/about">About</Link>
                <Link className="item" to="/users">Users</Link>
                <Link className="item" to="/blog">Blog</Link>
                <Link className="item" to="/contact">Contact</Link>
            </div>
        </div>
    )
};

export default Header
