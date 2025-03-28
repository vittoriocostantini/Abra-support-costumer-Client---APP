import React, { useRef, useEffect } from 'react';
import { IonList, IonIcon, IonFooter } from '@ionic/react';
import MessageBubble from '../message-bubble/message-bubble';
import './message-list.css';
import { lockClosed } from 'ionicons/icons';
import useMessageListScroll from '../../../hooks/chat/container/use-message-chat-listeners';
import { getCurrentTime } from '../../../services/time-service/time-service';

// Este componente se encarga de renderizar la lista de mensajes y escuchar los eventos de teclado
interface MessagesListProps {
    messages: { text: string; sender: string; replyingTo?: string }[]; // Update to include replyingTo
    messagesEndRef: React.RefObject<HTMLDivElement>;
    keyboardHeight: number;
    setReplyMessage: (msg: string) => void;
}

const MessagesList: React.FC<MessagesListProps> = ({ messages, messagesEndRef, keyboardHeight, setReplyMessage }) => {
    const containerRef = useRef<HTMLIonListElement | null>(null);
    const footerRef = useRef<HTMLIonFooterElement | null>(null);
    
    useMessageListScroll(footerRef, messagesEndRef, keyboardHeight);

    useEffect(() => {
        // Desplazar al final de la lista de mensajes al cargar
        const timer = setTimeout(() => {
            if (messagesEndRef.current) {
                messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
            }
        }, 100); // Espera 100 ms para asegurar que los mensajes se rendericen

        return () => clearTimeout(timer); // Limpiar el timer al desmontar
    }, []); // Se ejecuta solo una vez al montar el componente

    // Usar el nuevo hook para desplazar al fondo

    return (
        <div className='message-container' style={{ height: '100%' }}>
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
                        timestamp={getCurrentTime()}
                        setReplyMessage={setReplyMessage}
                        replyingTo={msg.replyingTo} // Pass the replyingTo property
                    />
                ))}
                <div ref={messagesEndRef} style={{ paddingBottom: '100px',width: '100%' }} ></div>
            </IonList>
        </div>
    );
};

export default MessagesList;

