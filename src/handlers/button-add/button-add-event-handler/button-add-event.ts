import React from 'react';

export const handleChatIconAddClick = (
    event: React.MouseEvent<HTMLIonButtonElement>,
    isKeyboardVisible: boolean,
    inputRef: React.RefObject<HTMLTextAreaElement>
) => {
    event.preventDefault();
    
    // Verificar si el botón de carga de archivos fue el que se hizo clic
    if (event.currentTarget.classList.contains('chat-icon-add')) {
        // Si es el botón de carga de archivos, solo enfocar el textarea
        if (isKeyboardVisible && inputRef.current) {
            inputRef.current.focus();
        }
        document.getElementById('fileInput')?.click(); // Abre el selector de archivos
        return true; // Indicate that the chat-icon-add was clicked
    }
    return false; // Indicate that the chat-icon-add was not clicked
};