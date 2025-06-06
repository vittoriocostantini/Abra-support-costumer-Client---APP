import React, { useRef, useImperativeHandle, forwardRef, useState, useEffect } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { IonButton, IonFooter, IonIcon, IonToolbar, IonButtons, IonFabButton } from '@ionic/react';
import MessageBubble from '../message-bubble/message-bubble';
import './message-list.css';
import { chevronDown, lockClosed } from 'ionicons/icons';
import { getCurrentTime } from '../../../../services/time-service/time-service';
import { useTranslation } from 'react-i18next';

interface MessagesListProps {
    messages: { text: string; sender: string; replyingTo?: string }[];
    keyboardHeight: number;
    setReplyMessage: (msg: string) => void;
    agentName: string;
}

const MessagesList = forwardRef<any, MessagesListProps>(({ messages, keyboardHeight, setReplyMessage, agentName }, ref) => {
    const virtuosoRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation('letter');
    const [atBottom, setAtBottom] = useState(true);
    const [containerHeight, setContainerHeight] = useState<number>(0);
    const prevMessagesLength = useRef<number>(messages.length);



    
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
                virtuosoRef.current.scrollToIndex({ index: messages.length - 1, align: 'end', behavior: 'smooth' });
                setTimeout(() => {
                    if (virtuosoRef.current) {
                        virtuosoRef.current.scrollToIndex({ index: messages.length - 1, align: 'end', behavior: 'smooth' });
                    }
                }, 150);
            }
        }
        prevMessagesLength.current = messages.length;
    }, [messages, atBottom]);

    
    useImperativeHandle(ref, () => ({
        scrollToBottom: () => {
            if (virtuosoRef.current) {
                virtuosoRef.current.scrollToIndex({ index: messages.length - 1, align: 'end', behavior: 'smooth' });
            }
        }
    }));

    return (
        <div ref={containerRef} className='message-container' id='chat-container'>
            <Virtuoso 
                ref={virtuosoRef}
                style={{ height: '100%', width: '100%', flex: 1}}
                className='virtuoso-messages ion-content-scroll-host'     
                totalCount={messages.length}
                data={messages}
                itemContent={(index, msg) => {
                    const isLastInGroup = index === messages.length - 1 || messages[index + 1]?.sender !== msg.sender;
                    return (
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column'  }}>
                            <MessageBubble
                                message={msg.text}
                                sender={msg.sender}
                                key={index}
                                isOwnMessage={msg.sender === 'Yo'}
                                timestamp={getCurrentTime()}
                                setReplyMessage={setReplyMessage}
                                replyingTo={msg.replyingTo}
                                agentName={agentName}
                                isLastInGroup={isLastInGroup}
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

export default MessagesList;

