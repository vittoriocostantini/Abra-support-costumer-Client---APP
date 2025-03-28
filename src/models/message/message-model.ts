export type Message = { 
    text: string; 
    sender: string; 
    chatId: string; 
    unread?: number; 
    replyingTo?: string 
};