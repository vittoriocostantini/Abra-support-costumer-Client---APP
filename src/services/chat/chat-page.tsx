import React, { useRef, useState, useEffect } from 'react';
import { IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonFooter, 
    IonButtons, 
    IonButton, 
    IonIcon, 
    IonAvatar, 
    IonChip,
    IonLabel} from '@ionic/react';
import { send,  chevronBack, closeCircle, closeCircleOutline } from 'ionicons/icons';
import './chat-page.css';
// Import the animation CSS
import '../../handlers/message-reply/reply-animation.css';
import { handleFilesSelected } from '../../handlers/file-upload/file-handlers';
import ChatInput from '../../components/chat-input/chat-input';
import FileUploadButton from '../../functions/messages/file-upload/file-upload-service';
import MessagesList from '../../components/message-container/message-list';
import '../../theme/variables.css';
import { hideTabBar } from '../tabs/tab-bar-view/tabbar-view';
import { useKeyboardListeners } from '../../handlers/keyboard/keyboard-handler';
import { useParams, useLocation } from 'react-router-dom';
import { getAgentByName } from '../../data/agents-data/agent-data';
import { sendMessageHandler } from '../../handlers/send-message/send-message';
import { useScrollToBottom } from '../../utils/chat/scroll-to-bottom/scroll-to-bottom';
import useResetTextarea from '../../hooks/chat/chat-input/use-reset-textarea';
import { loadMessages } from '../../utils/chat/storage-load-messages/storage-load-messages';
import { useMessageStatus } from '../../functions/messages/message-status/message-status';

// ChatPage es el componente principal de la página de chat
const ChatPage: React.FC = () => {
    const location = useLocation<{ agentName: string; avatarUrl: string }>();
    const { agentName, avatarUrl } = location.state || { agentName: 'Nombre del agente', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' };
    const { name: agentNameFromData, avatar: agentAvatar } = getAgentByName(agentName);
    const { id: chatId } = useParams<{ id: string }>();
    const inputRef = useRef<HTMLTextAreaElement>(null!);
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<{ text: string; sender: string; chatId: string; replyingTo?: string }[]>(loadMessages(chatId));
    const messagesEndRef = useRef<HTMLDivElement>(null!);
    const keyboardHeight = useRef<number>(0);
    const [isSendButtonVisible, setSendButtonVisible] = useState(false);
    const resetTextarea = useResetTextarea(inputRef);
    const [replyMessage, setReplyMessage] = useState<string | null>(null);
    // Add this new state for controlling animation
    const [isReplyExiting, setIsReplyExiting] = useState(false);
    
    // Este hook se encarga de ocultar la barra de pestañas
    hideTabBar();
    // Este hook se encarga de escuchar los eventos de teclado
    useKeyboardListeners();

    useEffect(() => {
        const handleKeyboardShow = (event: any) => {
            keyboardHeight.current = event.keyboardHeight;
            setIsKeyboardVisible(true);
        };

        const handleKeyboardHide = () => {
            keyboardHeight.current = 0;
            setIsKeyboardVisible(false);
        };

        window.addEventListener('keyboardDidShow', handleKeyboardShow);
        window.addEventListener('keyboardDidHide', handleKeyboardHide);

        return () => {
            window.removeEventListener('keyboardDidShow', handleKeyboardShow);
            window.removeEventListener('keyboardDidHide', handleKeyboardHide);
        };
    }, []);

    useEffect(() => {
        setSendButtonVisible(message.trim().length > 0);
    }, [message]);

    const handleButtonClick = (event: React.MouseEvent<HTMLIonButtonElement>) => {
        event.preventDefault();
        
        // Verificar si el botón de carga de archivos fue el que se hizo clic
        if (event.currentTarget.classList.contains('chat-icon-add')) {
            // Si es el botón de carga de archivos, solo enfocar el textarea
            if (isKeyboardVisible && inputRef.current) {
                inputRef.current.focus();
            }
            document.getElementById('fileInput')?.click(); // Abre el selector de archivos
            return; // Salir de la función para evitar el envío del mensaje
        }
    
        // Lógica para enviar el mensaje
        sendMessageHandler(message, chatId, setMessages, setMessage, inputRef, replyMessage);
        resetTextarea();
        setReplyMessage(null); // Clear the replyMessage state
    
        // No ocultar el teclado al enviar el mensaje
        if (isKeyboardVisible && inputRef.current) {
            inputRef.current.focus(); // Mantener el foco en el textarea
        }
    };

    // Este hook se encarga de desplazar el contenedor de mensajes hacia abajo cuando se agrega un nuevo mensaje
    useScrollToBottom(messagesEndRef, messages);

    // Use the new hook to update ticket status when a new message is detected
    useMessageStatus(messages, chatId);

    return (
        <IonPage className='chat-page'>
            <IonHeader className='header-chat' translucent={true} class='ion-no-border'>
                <IonToolbar className='toolbar-header'>
                    <IonButtons slot="start">
                        <IonButton className="back-button" slot="start" onClick={() => window.history.back()} fill="clear">
                            <IonIcon icon={chevronBack} size="large"/>
                        </IonButton>
                    </IonButtons>   
                    <div className='agent-info'>
                        <IonAvatar slot="start" className="chat-avatar" >
                            <img src={avatarUrl} alt="Avatar del agente" />
                        </IonAvatar>
                        <p className='agent-title'>{agentName}</p>
                    </div>
                </IonToolbar>
            </IonHeader>
              <IonContent id='chat-container' fullscreen scrollY={false}>
                <MessagesList 
                    messages={messages} 
                    messagesEndRef={messagesEndRef as React.RefObject<HTMLDivElement>} 
                    keyboardHeight={keyboardHeight.current}
                    setReplyMessage={setReplyMessage}
                    agentName={agentName} // Pass the agent's name
                />
              </IonContent>
            <IonFooter className="chat-footer" id='chat-footer' class='ion-no-border' translucent={true} >
                <IonToolbar className="toolbar-footer">
                    {replyMessage && (
                        <div className={`reply-message ${isReplyExiting ? 'reply-message-exit' : 'reply-message-animate'}`}>
                            <p>{replyMessage}</p>
                            <IonButton 
                                slot='end' 
                                fill='clear' 
                                className='close-reply' 
                                onClick={() => {
                                    // Start exit animation
                                    setIsReplyExiting(true);
                                    // Wait for animation to complete before removing
                                    setTimeout(() => {
                                        setReplyMessage(null);
                                        setIsReplyExiting(false);
                                    }, 300); // Same duration as animation
                                }}
                            >
                                <IonIcon icon={closeCircleOutline} slot="icon-only" size='large'/>
                            </IonButton>
                        </div>
                    )}
                    <div className='chat-input-container'>  
                        <FileUploadButton 
                            onFilesSelected={handleFilesSelected} 
                            handleButtonClick={handleButtonClick} 
                        />
                        <ChatInput 
                            inputRef={inputRef as React.RefObject<HTMLTextAreaElement>} 
                            value={message}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                        />
                        <IonButton
                            slot="end" 
                            shape="round"
                            size="small"
                            className={`chat-button-send ${isSendButtonVisible ? 'visible' : ''}`}
                            onClick={handleButtonClick} 
                            style={{ opacity: isSendButtonVisible ? 1 : 0 }}
                        >
                            <IonIcon icon={send} slot="icon-only"/>
                        </IonButton>
                    </div>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default ChatPage;

