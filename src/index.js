import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import registerServiceWorker from './registerServiceWorker';

const options = {
    position: 'bottom center',
    timeout: 5000,
    offset: "30",
    transition: 'scale'
}

class Root extends Component  {
    render () {
        return (
            <AlertProvider template={AlertTemplate} {...options}>
                <App />
            </AlertProvider>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
