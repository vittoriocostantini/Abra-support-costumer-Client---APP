import React, { useState } from 'react';
import './message-bubble.css';
import { getCurrentTime } from '../../../services/time-service/time-service';
import { useSwipeToReply } from '../message-swipe/message-swipe';

interface MessageBubbleProps {
    message: string;
    isOwnMessage: boolean;
    timestamp: string;
    sender: string;
    setReplyMessage: (msg: string) => void;
    replyingTo?: string; // Add this optional prop for the message being replied to
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ 
    message, 
    isOwnMessage, 
    timestamp, 
    sender, 
    setReplyMessage,
    replyingTo 
}) => {
    const { swipeDistance, handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipeToReply(isOwnMessage, message, setReplyMessage);

    const [displayedTimestamp] = useState(getCurrentTime());
    const timestampSent = isOwnMessage ? displayedTimestamp : ''; // Timestamp para "sent"
    const timestampReceived = !isOwnMessage ? displayedTimestamp : ''; // Timestamp para "received"

    return (
        <div 
            className={`message-bubble ${isOwnMessage ? 'sent' : 'received'} ${swipeDistance !== 0 ? 'swiping' : ''}`}
            style={{ '--swipe-distance': `${swipeDistance}px` } as React.CSSProperties} // Cast to CSSProperties
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className={`bubble-reply-badge ${isOwnMessage ? 'sent-badge' : 'received-badge'}`}>
                {replyingTo && <p>{replyingTo}</p>}
            </div>
            <span className='message-text'><p>{message}</p></span>
            <div className={`timestamp ${isOwnMessage ? 'sent-timestamp' : 'received-timestamp'}`}>
                {isOwnMessage ? timestampSent : timestampReceived}
            </div>
        </div>
    );
};

export default MessageBubble;


