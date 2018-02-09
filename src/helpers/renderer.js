import App from '../client/App';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router} from 'react-router-dom';

export default (req) => {
    const content = renderToString(
        <Router location={req.path} context={{}}>
            <App />
        </Router>)
    
    const html = `
        <html>
            <head>
                <title>React SSR</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `

    return html
}