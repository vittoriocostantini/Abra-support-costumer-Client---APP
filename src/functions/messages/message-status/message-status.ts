import { useEffect } from 'react';
import { useTicketsStore } from '../../../stores/tickets-store/tickets-global-store';

// Hook para cambiar el estado del ticket a "En Proceso" cuando se detecta un nuevo mensaje
export const useMessageStatus = (
    messages: { text: string; sender: string; chatId: string }[],
    chatId: string
) => {
    const updateTicketStatus = useTicketsStore(state => state.updateTicketStatus);
    useEffect(() => {
        if (messages.length > 0) {
            updateTicketStatus(chatId, 'En Proceso');
        }
    }, [messages, chatId, updateTicketStatus]);
};