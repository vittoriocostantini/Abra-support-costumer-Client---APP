import React, { useRef, useEffect } from 'react';
import { IonList, IonIcon, IonFooter } from '@ionic/react';
import MessageBubble from '../message-bubble/MessageBubble';
import './Message-List.css';
import { lockClosed } from 'ionicons/icons';
import useMessageListScroll from '../../../hooks/chat/container/useMessageChatListeners';

// Este componente se encarga de renderizar la lista de mensajes y escuchar los eventos de teclado
interface MessagesListProps {
    messages: { text: string; sender: string }[];
    messagesEndRef: React.RefObject<HTMLDivElement>;
    keyboardHeight: number;
}

const MessagesList: React.FC<MessagesListProps> = ({ messages, messagesEndRef, keyboardHeight }) => {
    const containerRef = useRef<HTMLIonListElement | null>(null);
    const footerRef = useRef<HTMLIonFooterElement | null>(null);
    
    useMessageListScroll(footerRef, messagesEndRef, keyboardHeight);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Llama a scrollToBottom cada vez que cambian los mensajes
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className='message-container-chat' style={{ height: '100%' }}>
            <IonList className="messages-list" ref={containerRef} id="message-list">
                <div className='chat-letter'>
                    <p><IonIcon size='small' icon={lockClosed} />Los mensajes se cifran de extremo a extremo
                    para garantizar la privacidad y la seguridad de la conversación.</p>
                </div>
                {messages.map((msg, index) => (
                    <MessageBubble 
                        message={msg.text} 
                        sender={msg.sender} 
                        key={index} 
                        isOwnMessage={msg.sender === 'Yo'}
                        timestamp={new Date().toLocaleTimeString()}
                    />
                ))}
                <div ref={messagesEndRef} style={{ paddingBottom: '100px' }} />
            </IonList>
        </div>
    );
};

export default MessagesList;