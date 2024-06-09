import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
