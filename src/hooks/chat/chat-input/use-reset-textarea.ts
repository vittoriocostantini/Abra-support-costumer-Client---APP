import { useRef } from 'react';

const useResetTextarea = (inputRef: React.RefObject<HTMLTextAreaElement>) => {
    const resetTextarea = () => {
        if (inputRef.current) {
            inputRef.current.value = ''; // Limpiar el contenido
            inputRef.current.style.height = 'auto'; // Restablecer la altura
            inputRef.current.classList.remove('typing'); // Eliminar clase al restablecer
        }
    };

    return resetTextarea;
};

export default useResetTextarea; 

/* use-reset-textarea.ts */