import React, { useRef, useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButtons, IonButton, IonIcon, IonAvatar } from '@ionic/react';
import { send, personAddOutline, chevronBack } from 'ionicons/icons';
import './chat-page.css';
import { handleFilesSelected } from '../../hooks/chat/file-upload/file-handlers';
import ChatInput from '../../components/chat-utils/chat-input/chat-input';
import FileUploadButton from '../../components/chat-utils/file-upload-service/file-upload-service';
import MessagesList from '../../components/chat-utils/message-container/message-list';
import '../../theme/variables.css';
import { hideTabBar } from '../tabs/tab-bar-view/tabbar-view';
import { useKeyboardListeners } from '../../hooks/chat/keyboard/keyboard-handler';
import { useParams } from 'react-router-dom';
import { getAgentById } from '../../agents-data/agent-data';
import { sendMessageHandler } from '../../hooks/chat/send-message/send-message';
import { loadMessages, useScrollToBottom } from '../../hooks/chat/utils/chat-utils';
import useResetTextarea from '../../hooks/chat/chat-input/use-reset-textarea';


const ChatPage: React.FC = () => {
    const { id: chatId } = useParams<{ id: string }>();
    const { name: agentName, avatar: agentAvatar } = getAgentById(chatId);
    const inputRef = useRef<HTMLTextAreaElement>(null!);
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<{ text: string; sender: string; chatId: string }[]>(loadMessages(chatId));
    const messagesEndRef = useRef<HTMLDivElement>(null!);
    const keyboardHeight = useRef<number>(0);
    const [isSendButtonVisible, setSendButtonVisible] = useState(false);
    const resetTextarea = useResetTextarea(inputRef);

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
        sendMessageHandler(message, chatId, setMessages, setMessage, inputRef);
        resetTextarea();
        
        // No ocultar el teclado al enviar el mensaje
        if (isKeyboardVisible && inputRef.current) {
            inputRef.current.focus(); // Mantener el foco en el textarea
        }
    };

    // Este hook se encarga de desplazar el contenedor de mensajes hacia abajo cuando se agrega un nuevo mensaje
    useScrollToBottom(messagesEndRef, messages);

   
    
    return (
        <IonPage className='chat-page'>
            <IonHeader className='header-chat'>
                <IonToolbar className='toolbar-header'>
                    <IonButtons slot="start">
                        <IonButton slot="start" onClick={() => window.history.back()} fill="clear">
                            <IonIcon icon={chevronBack} size="large"/>
                        </IonButton>
                    </IonButtons>
                    <div className='agent-info'>
                        <IonAvatar slot="start" className="chat-avatar" >
                            <img src={agentAvatar} alt="Avatar del agente"  />
                        </IonAvatar>
                        <IonTitle className='agent-title'>{agentName}</IonTitle>
                        
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent id='chat-container' fullscreen scrollY={false}>
                <MessagesList 
                    messages={messages} 
                    messagesEndRef={messagesEndRef as React.RefObject<HTMLDivElement>} 
                    keyboardHeight={keyboardHeight.current}
                />
            </IonContent>
            
            <IonFooter className="chat-footer" id='chat-footer' class='ion-no-border' translucent={true} >
                <IonToolbar className="toolbar-footer" >
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
                            size="small"
                            className={`chat-button-send ${isSendButtonVisible ? 'visible' : ''}`}
                            onClick={handleButtonClick} 
                            style={{ opacity: isSendButtonVisible ? 1 : 0 }}
                        >
                            <IonIcon icon={send} />
                        </IonButton>
                    </div>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default ChatPage;

/* chat-page.tsx */