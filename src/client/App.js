import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import routes from './Routes';

const App = () => {
    return (
        <div>{renderRoutes(routes)}</div>
    )
}

export default App;