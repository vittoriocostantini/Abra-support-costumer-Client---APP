import React, { useState, useRef, useEffect } from 'react';
import './message-bubble.css';
import { useSwipeToReply } from '../../../../hooks/chat/message-swipe/message-swipe';

interface MessageBubbleProps {
    message: string;
    isOwn: boolean;
    timestamp: string;
    sender: string;
    onReply: (msg: string) => void;
    replyTo?: string;
    agentName: string;
    isLastGroup?: boolean;
    onSwipeStart?: () => void;
    onSwipeEnd?: () => void;
}

const MAX_LENGTH = 700;

const MessageBubble: React.FC<MessageBubbleProps> = ({
    message,
    isOwn,
    timestamp,
    sender,
    onReply,
    replyTo,
    agentName,
    isLastGroup = false,
    onSwipeStart,
    onSwipeEnd,
}) => {
    const { swipeDistance, handleTouchStart, handleTouchMove, handleTouchEnd, isSwiping } = useSwipeToReply(isOwn, message, onReply, onSwipeStart, onSwipeEnd);
    const [expanded, setExpanded] = useState(false);
    const showExpand = message.length > MAX_LENGTH;

    // Ref para el div principal
    const bubbleRef = useRef<HTMLDivElement>(null);

    // Handler nativo para prevenir scroll en iOS
    useEffect(() => {
        const el = bubbleRef.current;
        if (!el) return;
        const handler = (e: TouchEvent) => {
            if (isSwiping) {
                e.preventDefault();
            }
        };
        el.addEventListener('touchmove', handler, { passive: false });
        return () => {
            el.removeEventListener('touchmove', handler);
        };
    }, [isSwiping]);

    // Nuevo handler para prevenir scroll durante swipe (para navegadores no iOS)
    const handleTouchMoveWithPrevent: React.TouchEventHandler<HTMLDivElement> = (e) => {
        // Solo ejecuta la lógica de swipe, sin preventDefault aquí
        handleTouchMove(e);
    };

    return (
        <div
            ref={bubbleRef}
            className={`message-bubble ${isOwn ? 'sent' : 'received'} ${swipeDistance !== 0 ? 'swiping' : ''} ${isLastGroup ? 'last-message' : ''}`}
            style={{ '--swipe-distance': `${swipeDistance}px` } as React.CSSProperties}
            tabIndex={0}
            aria-label={`Mensaje de ${isOwn ? 'tú' : sender}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMoveWithPrevent}
            onTouchEnd={handleTouchEnd}
            onDoubleClick={() => onReply(message)}
        >
            {replyTo && (
                <div className={`bubble-reply-badge ${isOwn ? 'sent-badge' : 'received-badge'}`}>
                    <span className='agent-name'>{agentName}</span>
                    <p>{replyTo}</p>
                </div>
            )}
            <span className='message-text'>
                <p>{expanded ? message : message.slice(0, MAX_LENGTH)}</p>
                <span className={`timestamp ${isOwn ? 'sent-timestamp' : 'received-timestamp'}`}>{timestamp || '-'}</span>
            </span>
            {showExpand && (
                <button className='button-expand-message' onClick={() => setExpanded(e => !e)} aria-label={expanded ? 'Ver menos' : 'Ver más'}>
                    <span>{expanded ? 'ver menos' : 'ver más'}</span>
                </button>
            )}
        </div>
    );
};

export default MessageBubble;


