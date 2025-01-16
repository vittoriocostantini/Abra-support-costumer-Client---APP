import React, { useEffect, useState } from 'react';
import './message-bubble.css';

interface MessageBubbleProps {
    message: string;
    isOwnMessage: boolean;
    timestamp: string;
    sender: string;
}

// Este componente se encarga de renderizar un mensaje en el chat
const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isOwnMessage, timestamp, sender  }) => {
    const [displayedTimestamp] = useState(timestamp);

    return (
        <div className={`message-bubble ${isOwnMessage ? 'sent' : 'received'}`}>
            <span className='message-text'>{message}</span>
            <span className='timestamp'>{displayedTimestamp.split(':').slice(0, 2).join(':') + ' ' + displayedTimestamp.split(' ')[1]}</span>
        </div>
    );
};

export default MessageBubble;


/* message-bubble.tsx */