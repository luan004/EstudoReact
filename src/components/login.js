import React from 'react';
import ReactDOM from 'react-dom/client';
import Panel from './panel';
import '../css/Pieces.css';

export default function Login() {
    window.history.pushState(null, null, '/login');
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Essa é uma página de login
                </p>
                <Button />
            </header>
        </div>
    );
}

function Button() {
    function handleClick() {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <React.StrictMode>
                <Panel />
            </React.StrictMode>
        );
    }
    return (
        <button
        onClick={handleClick} 
            className="Button"
        >
        Mudar de tela
        </button>
    );
}