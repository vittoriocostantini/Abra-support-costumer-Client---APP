import React, { useRef, useImperativeHandle, forwardRef, useState, useEffect } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { IonIcon, IonButtons, IonFabButton } from '@ionic/react';
import MessageBubble from '../message-bubble/message-bubble';
import './message-list.css';
import { chevronDown, lockClosed } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';

interface Message {
    text: string;
    sender: string;
    timestamp: string;
    replyTo?: string;
}

interface MessageListProps {
    messages: Message[];
    onReply: (msg: string) => void;
    agentName: string;
}

const MessageList = forwardRef<any, MessageListProps>(({ messages, onReply, agentName }, ref) => {
    const virtuosoRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation('letter');
    const [atBottom, setAtBottom] = useState(true);
    const [containerHeight, setContainerHeight] = useState<number>(0);
    const prevMessagesLength = useRef<number>(messages.length);
    const [isAnySwiping, setIsAnySwiping] = useState(false);

    useEffect(() => {
        if (containerRef.current) {
            setContainerHeight(containerRef.current.offsetHeight);
            const resizeObserver = new window.ResizeObserver(() => {
                if (containerRef.current) {
                    setContainerHeight(containerRef.current.offsetHeight);
                }
            });
            resizeObserver.observe(containerRef.current);
            return () => resizeObserver.disconnect();
        }
    }, []);

    useEffect(() => {
        const isLastMessageFromMe = messages[messages.length - 1]?.sender === 'Yo';
        if (messages.length > prevMessagesLength.current) {
            if (virtuosoRef.current && (atBottom || isLastMessageFromMe)) {
                setTimeout(() => {
                    if (virtuosoRef.current) {
                        virtuosoRef.current.scrollToIndex({ index: messages.length - 1, align: 'end', behavior: 'smooth' });
                    }
                }, 80);
            }
        }
        prevMessagesLength.current = messages.length;
    }, [messages, atBottom]);

    useImperativeHandle(ref, () => ({
        scrollToBottom: () => {
            virtuosoRef.current?.scrollToIndex({ index: messages.length - 1, align: 'end', behavior: 'smooth' });
        }
    }));

    useEffect(() => {
        if (atBottom && messages.length > 0) {
            virtuosoRef.current?.scrollToIndex({ index: messages.length - 1, align: 'end', behavior: 'smooth' });
        }
    }, [messages, atBottom]);

    // Funciones para manejar swipe global
    const handleSwipeStart = () => setIsAnySwiping(true);
    const handleSwipeEnd = () => setIsAnySwiping(false);

    return (
        <div
            ref={containerRef}
            className='message-container'
            id='chat-container'
            style={{
                transition: 'margin-bottom 0.2s, padding-bottom 0.2s',
                overflow: isAnySwiping ? 'hidden' : 'auto',
            }}
        >
            <Virtuoso 
            
                ref={virtuosoRef}
                style={{ height: '100%', width: '100%', flex: 1}}
                className='virtuoso-messages ion-content-scroll-host'     
                totalCount={messages.length}
                data={messages}
                itemContent={(index, msg) => {
                    const isOwn = msg.sender === 'Yo';
                    const isLastGroup = index === messages.length - 1 || messages[index + 1]?.sender !== msg.sender;
                    return (
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column'  }}>
                            <MessageBubble
                                key={index}
                                message={msg.text}
                                isOwn={isOwn}
                                timestamp={msg.timestamp}
                                sender={msg.sender}
                                onReply={onReply}
                                replyTo={msg.replyTo}
                                agentName={agentName}
                                isLastGroup={isLastGroup}
                                onSwipeStart={handleSwipeStart}
                                onSwipeEnd={handleSwipeEnd}
                            />
                        </div>
                    );
                }}
                components={{
                    Header: () => <div className='chat-letter'><p><IonIcon size='small' icon={lockClosed} />{t('chatLetter')}</p></div>,
                    Footer: () => <div style={{ height: '40px' }} />
                }}
                atBottomStateChange={setAtBottom}
                atBottomThreshold={containerHeight ? Math.floor(containerHeight * 0.3) : 10}
                followOutput={atBottom ? 'smooth' : false}
            />
            {!atBottom && (
               <IonFabButton
               translucent={true}
               className='scroll-to-bottom-btn'
               onClick={() => virtuosoRef.current?.scrollToIndex({ index: messages.length - 1, align: 'end', behavior: 'smooth' })}
           >
               <IonButtons>
                   <IonIcon slot='icon-only' size='large' icon={chevronDown} />
               </IonButtons>
           </IonFabButton>
            )}
        </div>
    );
});

export default MessageList;

