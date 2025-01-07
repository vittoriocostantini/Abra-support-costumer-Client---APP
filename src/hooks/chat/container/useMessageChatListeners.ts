import { useEffect } from 'react';

const useMessageListScroll = (
  footerRef: React.RefObject<HTMLIonFooterElement>,
  messagesEndRef: React.RefObject<HTMLDivElement>,
  keyboardHeight: number
) => {
  useEffect(() => {
    const scrollToBottom = () => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    scrollToBottom(); // Desplazar hacia abajo al montar el componente o al cambiar el contenido

    // Escuchar cambios en la altura del teclado
    const handleKeyboardResize = () => {
      if (footerRef.current) {
        footerRef.current.style.marginBottom = `${keyboardHeight}px`;
      }
      scrollToBottom(); // Desplazar hacia abajo después de ajustar la altura
    };

    window.addEventListener('resize', handleKeyboardResize);

    return () => {
      window.removeEventListener('resize', handleKeyboardResize);
    };
  }, [footerRef, messagesEndRef, keyboardHeight]);
};

export default useMessageListScroll; 