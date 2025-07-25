import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Asegúrate de que el contenedor exista antes de crear el root
const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}

// Configurar los listeners del teclado

