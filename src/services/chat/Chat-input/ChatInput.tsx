import React, { useRef, useEffect } from 'react';
import './ChatInput.css';

interface ChatInputProps {
    inputRef: React.RefObject<HTMLTextAreaElement>;
}

const MAX_LINES = 5; // Define el número máximo de líneas permitido



const ChatInput: React.FC<ChatInputProps> = ({ inputRef }) => {
    const handleInput = () => {
        if (inputRef.current) {
            const lines = inputRef.current.value.split('\n').length;
            if (lines > MAX_LINES) {
                const trimmedValue = inputRef.current.value.split('\n').slice(0, MAX_LINES).join('\n');
                inputRef.current.value = trimmedValue;
            }
            inputRef.current.style.height = 'auto'; // Restablece la altura
            inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, MAX_LINES * 24)}px`; // Ajusta la altura al contenido, hasta un máximo de 5 líneas
            inputRef.current.style.overflowY = 'scroll'; // Asegúrate de que esto esté presente
        }
    };

    useEffect(() => {
        if (inputRef.current) {
            handleInput(); // Ajusta la altura inicial
            inputRef.current.addEventListener('input', handleInput);
        }
        return () => {
            if (inputRef.current) {
                inputRef.current.removeEventListener('input', handleInput);
            }
        };
    }, [inputRef]);

    return (
        <textarea
            ref={inputRef}
            className="chat-input-message"
            id="chat-input-message"
            rows={1}
            onInput={handleInput}
        ></textarea>
    );
};

export default ChatInput;
 