import React from 'react';

export default function Home() {
    window.history.pushState(null, null, '/home');
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    home
                </p>
            </header>
        </div>
    );
}