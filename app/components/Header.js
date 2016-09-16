import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Header = ({ isLoggedIn }) => {
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
                {!isLoggedIn ?
                <Link className="item" to="/login">Login</Link>
                :
                <Link className="item" to="/profile">Account</Link>
                }
                {!isLoggedIn ?
                <Link className="item" to="/signup">Signup</Link>
                :
                <a className="item">Logout</a>
                }
            </div>
        </div>
    )
};

Header.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

export default Header;
