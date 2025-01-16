import { useEffect } from 'react';

const useAdjustHeight = (inputRef: React.RefObject<HTMLTextAreaElement>, value: string) => {
    useEffect(() => {
        const handleInput = () => {
            if (inputRef.current) {
                inputRef.current.style.height = 'auto'; // Restablecer altura antes de calcular
                inputRef.current.style.height = `${inputRef.current.scrollHeight}px`; // Ajustar altura
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Enter' && value.length < 1) {
                event.preventDefault(); // Prevenir salto de línea si no hay caracteres
            }
        };

        const currentInput = inputRef.current;
        currentInput?.addEventListener('keydown', handleKeyDown);

        handleInput(); // Ajustar altura al cambiar el valor

        return () => {
            currentInput?.removeEventListener('keydown', handleKeyDown);
        };
    }, [value, inputRef]);
};

export default useAdjustHeight; 