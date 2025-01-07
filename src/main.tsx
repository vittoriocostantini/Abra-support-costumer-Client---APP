import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Keyboard } from "@capacitor/keyboard";

// Asegúrate de que el contenedor exista antes de crear el root
const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}

// Escuchar los eventos de teclado y ajustar la altura de la aplicación
Keyboard.addListener("keyboardWillShow", ({ keyboardHeight }) => {
  document.querySelector("ion-app")!.style.height = `${window.outerHeight - keyboardHeight}px`;
});

Keyboard.addListener("keyboardWillHide", () => {
  document.querySelector("ion-app")!.style.height = "";
});

