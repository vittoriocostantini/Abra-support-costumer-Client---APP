import { useEffect } from 'react';
import { updateTicketStatus } from '../../tickets/ticket-support/ticket-status'; // Importar la función para actualizar el estado

// Hook para cambiar el estado del ticket a "En Proceso" cuando se detecta un nuevo mensaje
export const useMessageStatus = (
    messages: { text: string; sender: string; chatId: string }[],
    chatId: string
) => {
    useEffect(() => {
        if (messages.length > 0) {
            updateTicketStatus(chatId, 'En Proceso');
        }
    }, [messages, chatId]);
};