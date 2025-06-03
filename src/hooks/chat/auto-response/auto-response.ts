
import { useMessageStore } from '../../../stores/message-store/message-store';

export const simulateAutoResponse = (chatId: string) => {
    setTimeout(() => {
        const isInChat = window.location.pathname === `/tickets/chat/${chatId}`;
        useMessageStore.getState().addMessage({
            text: 'Hola, ¿cómo puedo ayudarte?',
            sender: 'bot',
            chatId: chatId,
            unread: isInChat ? 0 : 1
        });
        useMessageStore.getState().addMessage({
            text: '¿En qué área necesitas asistencia?',
            sender: 'bot',
            chatId: chatId,
            unread: isInChat ? 0 : 1
        });
    }, 15000);
};