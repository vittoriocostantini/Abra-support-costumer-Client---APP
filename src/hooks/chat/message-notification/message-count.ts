// Esta función cuenta los mensajes no leídos para un chat específico
export const countUnreadMessages = (messages: { text: string; sender: string; chatId: string }[], chatId: string): number => {
    return messages.filter(message => message.chatId === chatId && message.sender !== 'Yo').length;
};
