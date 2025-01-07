import React, { useEffect } from 'react';
import './ChatInput.css';

interface ChatInputProps {
    inputRef: React.RefObject<HTMLTextAreaElement>;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ inputRef, value, onChange }) => {
    const handleInput = () => {
        if (inputRef.current) {
            inputRef.current.style.height = 'auto'; // Restablecer altura antes de calcular
            inputRef.current.style.height = `${inputRef.current.scrollHeight}px`; // Ajustar altura
        }
    };

    useEffect(() => {
        handleInput(); // Ajustar altura al cambiar el valor
    }, [value]);

    // Función para restablecer el textarea
    const resetTextarea = () => {
        if (inputRef.current) {
            inputRef.current.value = ''; // Limpiar el contenido
            inputRef.current.style.height = 'auto'; // Restablecer la altura
        }
    };

    return (
        <textarea
            ref={inputRef}
            value={value}
            onChange={(e) => {
                onChange(e);
                handleInput(); // Ajustar altura al cambiar el contenido
            }}
            className="chat-input-message"
            id="chat-input-message"
            rows={1}
        />
    );
};

export default ChatInput;
 