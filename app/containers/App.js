import './App.scss'

import React from 'react';

import Header from '../components/Header';

const App = ({children}) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
};

export default App
