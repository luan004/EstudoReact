import React from 'react';
import Button from '../components/Elements.jsx'

export default function Home() {
    window.history.pushState(null, null, '/home');
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    home
                </p>
                <Button 
                    label="Iniciar"
                />
                <Button
                    label="Configurações"
                />
                <Button
                    label="Informações"
                />
            </header>
        </div>
    );
}