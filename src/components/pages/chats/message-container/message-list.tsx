import React, { useRef, useImperativeHandle, forwardRef, useState, useEffect } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { IonButton, IonFooter, IonIcon, IonToolbar, IonButtons } from '@ionic/react';
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
    const { t } = useTranslation('letter');


    useImperativeHandle(ref, () => ({
    }));

    return (
        <div className='message-container' style={{ position: 'relative' }}>
            <Virtuoso 
                ref={virtuosoRef}
                style={{ height: '100%', width: '100%', flex: 1}}
                className='virtuoso-messages'
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
                    Header: () =>                 <div className='chat-letter'>
                    <p><IonIcon size='small' icon={lockClosed} />{t('chatLetter')}</p>
                </div>
,
                   
                    Footer: () => <div  />
                }}
            />
            {/* Elimino el botón para hacer scroll manualmente */}
        </div>
    );
});

export default MessagesList;

