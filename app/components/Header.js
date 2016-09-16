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
                {!isLoggedIn ?
                <Link className="item" to="/login">Login</Link>
                :null}
                {!isLoggedIn ?
                <Link className="item" to="/signup">Signup</Link>
                :
                <Link className="item" to="/profile">Account</Link>
                }
                <Link className="item" to="/contact">Contact</Link>
            </div>
        </div>
    )
};

Header.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

export default Header;
