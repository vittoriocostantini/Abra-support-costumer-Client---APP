// src/hooks/chat/send-message/auto-response.ts

   export const simulateAutoResponse = (
    chatId: string,
    setMessages: React.Dispatch<React.SetStateAction<{ text: string; sender: string; chatId: string; unread?: number }[]>>
) => {
    // Use a unique timeout for each message to ensure each one triggers a response
    setTimeout(() => {
        setMessages(prevMessages => {
            const isInChat = window.location.pathname === `/tickets/chat/${chatId}`; // Verificar si estás en el chat
            const updatedMessages = [...prevMessages, { text: 'Hola, ¿cómo puedo ayudarte?', sender: 'bot', chatId: chatId, unread: isInChat ? 0 : 1 }];
            localStorage.setItem(`chatMessages_${chatId}`, JSON.stringify(updatedMessages)); // Guardar en localStorage con chatId
            return updatedMessages;
        });
    }, 10000); // Ensure this timeout is set for each message
};