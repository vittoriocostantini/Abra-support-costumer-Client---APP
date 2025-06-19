import React, { useRef, useImperativeHandle, forwardRef, useState, useEffect, useMemo } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { IonIcon, IonButtons, IonFabButton, IonFooter, IonToolbar, IonHeader } from '@ionic/react';
import MessageBubble from '../message-bubble/message-bubble';
import './message-list.css';
import { chevronDown, lockClosed } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { useAutoScroll } from '../../../../hooks/chat/message-list/scroll-last-message';
import { LogLevel } from 'react-virtuoso';

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
    const [isAnySwiping, setIsAnySwiping] = useState(false);
    const hasScrolledInitially = useRef(false);
    const [isAtTop, setIsAtTop] = useState(true);

    // Memoizar mensajes para evitar renders innecesarios
    const memoizedMessages = useMemo(() => messages, [messages]);

    // Usar el hook para scroll automático
    useAutoScroll(virtuosoRef, memoizedMessages, atBottom);

    useEffect(() => {
        const updateHeight = () => {
            if (containerRef.current) {
                setContainerHeight(containerRef.current.offsetHeight);
            }
        };
        updateHeight();
        const resizeObserver = new window.ResizeObserver(updateHeight);
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }
        return () => resizeObserver.disconnect();
    }, []);

    // Scroll automático al cargar la página
    useEffect(() => {
        if (!hasScrolledInitially.current && messages.length > 0) {
            setTimeout(() => {
                virtuosoRef.current?.scrollToIndex({
                    index: messages.length - 1,
                    align: 'end',
                    behavior: 'auto',
                });
                hasScrolledInitially.current = true;
            }, 50); // 50ms suele ser suficiente, puedes ajustar
        }
    }, [messages.length]);
    
    useImperativeHandle(ref, () => ({
        scrollToBottom: () => {
            virtuosoRef.current?.scrollToIndex({ index: messages.length - 1, align: 'end', behavior: 'smooth' });
        }
    }));

    // Funciones para manejar swipe global
    const handleSwipeStart = () => setIsAnySwiping(true);
    const handleSwipeEnd = () => setIsAnySwiping(false);

    return (
        <div
            ref={containerRef}
            className='message-container'
            id='chat-container'
            style={{
                transition: 'padding-bottom 0.2s',
                overflow: isAnySwiping ? 'hidden' : 'auto',
            }}
        >
            <Virtuoso 
                ref={virtuosoRef}
                style={{ height: '100%', width: '100%', flex: 1}}
                className='virtuoso-messages ion-content-scroll-host'     
                totalCount={memoizedMessages.length}
                logLevel={LogLevel.DEBUG}
                data={memoizedMessages}
                itemContent={(index, msg) => {
                    const isOwn = msg.sender === 'Yo';
                    const isLastGroup = index === memoizedMessages.length - 1 || memoizedMessages[index + 1]?.sender !== msg.sender;
                    const isFirstGroup = index === 0;
                    return (
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', paddingTop: isFirstGroup ? '70px' : '0px' }}>
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
                            <div className='message-bubble-end' style={{ height: '2px' }}/>
                        </div>
                    );
                }}
                atBottomStateChange={setAtBottom}
                atBottomThreshold={containerHeight ? Math.floor(containerHeight * 0.3) : 10}
                followOutput={atBottom ? 'smooth' : false}
                atTopStateChange={setIsAtTop}
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
            <div className={`chat-letter${isAtTop ? '' : ' chat-letter-fade-out'}`}>{t('chatLetter')}</div>
        </div>
    );
});

export default MessageList;

