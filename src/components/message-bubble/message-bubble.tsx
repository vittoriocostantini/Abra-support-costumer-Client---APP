import React, { useState } from 'react';
import './message-bubble.css';
import { getCurrentTime } from '../../services/time-service/time-service';
import { useSwipeToReply } from '../../hooks/chat/message-swipe/message-swipe';
import { IonButton, IonButtons } from '@ionic/react';

interface MessageBubbleProps {
    message: string;
    isOwnMessage: boolean;
    timestamp: string;
    sender: string;
    setReplyMessage: (msg: string) => void;
    replyingTo?: string;
    agentName: string; // Add this prop for the agent's name
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ 
    message, 
    isOwnMessage, 
    timestamp, 
    sender, 
    setReplyMessage,
    replyingTo,
    agentName
}) => {
    const { swipeDistance, handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipeToReply(isOwnMessage, message, setReplyMessage);
    const [displayedTimestamp] = useState(getCurrentTime());
    const timestampSent = isOwnMessage ? displayedTimestamp : ''; // Timestamp para "sent"
    const timestampReceived = !isOwnMessage ? displayedTimestamp : ''; // Timestamp para "received"
    const [isExpanded, setIsExpanded] = useState(false);

    const shouldShowSeeMore = message.length > 300;

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div 
            className={`message-bubble ${isOwnMessage ? 'sent' : 'received'} ${swipeDistance !== 0 ? 'swiping' : ''}`}
            style={{ '--swipe-distance': `${swipeDistance}px` } as React.CSSProperties}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {replyingTo && ( // Render bubble-reply-badge only if replyingTo is present
                <div className={`bubble-reply-badge ${isOwnMessage ? 'sent-badge' : 'received-badge'}`}>
                    <span className='agent-name'>{agentName}</span>
                    <p>{replyingTo}</p>
                </div>
            )}
            <span className='message-text'>
                <p>{isExpanded ? message : message.slice(0, 700)}</p>
            </span>
          
            <div className={`timestamp ${isOwnMessage ? 'sent-timestamp' : 'received-timestamp'}`}>
                {isOwnMessage ? timestampSent : timestampReceived}
                {shouldShowSeeMore && (
                <IonButtons className='button-expand-message' >
                <IonButton onClick={toggleExpand} fill='clear' size='small'>
                    <p>{isExpanded ? 'ver menos' : 'ver mas'}</p>
                </IonButton>
                </IonButtons>
            )}
            </div>
           
        </div>
    );
};

export default MessageBubble;


