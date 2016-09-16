import React from 'react';

const Header = () => {
    return (
        <div className="ui fixed inverted menu">
            <div className="ui container">
                <div className="header item">
                    React Starter
                </div>
                <a href="#" className="item">Home</a>
                <a href="#" className="item">About</a>
                <a href="#" className="item">Users</a>
                <a href="#" className="item">Contact</a>
            </div>
        </div>
    )
};

export default Header
