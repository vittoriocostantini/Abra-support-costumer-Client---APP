import { useState } from 'react';

// Este hook se encarga de manejar el envío de mensajes en el chat
const useSendMessage = () => {
    const [currentMessage, setCurrentMessage] = useState('');

    const handleSendMessage = () => {
        if (currentMessage.trim() !== '') {
            console.log('Mensaje enviado:', currentMessage);
            // Aquí puedes añadir la lógica para enviar el mensaje al servidor o actualizar el estado de la conversación
            setCurrentMessage(''); // Limpiar el campo de entrada después de enviar
        }
    };

    return {
        currentMessage,
        setCurrentMessage,
        handleSendMessage
    };
};

export default useSendMessage; 

//no esta en uso - - logica de envio de mensajes