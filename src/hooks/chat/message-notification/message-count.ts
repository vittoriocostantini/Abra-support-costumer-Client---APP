// Esta función cuenta los mensajes no leídos para un chat específico
export const countUnreadMessages = (messages: { text: string; sender: string; chatId: string; unread?: number }[], chatId: string, isInChat: boolean): number => {
    if (isInChat) {
        return 0; // No contar mensajes si estás en el chat
    }
    return messages.filter(message => message.chatId === chatId && message.unread && message.unread > 0).length;
};
