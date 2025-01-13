import React, { useRef, useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButtons, IonBackButton, IonButton, IonIcon, IonAvatar } from '@ionic/react';
import { send, personAddOutline, mic } from 'ionicons/icons';
import './ChatPage.css';
import { handleFilesSelected } from '../../hooks/chat/FileUpload/fileHandlers';
import ChatInput from '../../components/chat-utils/Chat-input/ChatInput';
import FileUploadButton from '../../components/chat-utils/File-Upload-Service/FileUploadService';
import MessagesList from '../../components/chat-utils/Message-Container/MessageList';
import '../../theme/variables.css';
import { hideTabBar } from '../../services/tabs/tabbarview/Tab-Bar-View';
import { useKeyboardListeners } from '../../hooks/chat/keyboard/keyboardHandler';
import { useParams } from 'react-router-dom';
import { getAgentById } from '../../Agents-data/agentData';
import { sendMessageHandler } from '../../hooks/chat/SendMessage/sendMessage';
import { loadMessages, useScrollToBottom } from '../../hooks/chat/utils/chatUtils';
import useResetTextarea from '../../hooks/chat/chatinput/useResetTextarea';


const ChatPage: React.FC = () => {
    const { id: chatId } = useParams<{ id: string }>();
    const { name: agentName, avatar: agentAvatar } = getAgentById(chatId);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<{ text: string; sender: string; chatId: string }[]>(loadMessages(chatId));
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
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
                        <IonBackButton defaultHref="/pages/Tickets" text=""/>
                    </IonButtons>
                    <div className='agent-info'>
                        <IonAvatar slot="start" className="chat-avatar" >
                            <img src={agentAvatar} alt="Avatar del agente"  />
                        </IonAvatar>
                        <IonTitle className='agent-title'>{agentName}</IonTitle>
                    </div>
                    <IonButton slot="end" fill="clear" onClick={handleButtonClick}>
                        <IonIcon icon={personAddOutline} size="large"/>
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent id='chat-container' fullscreen scrollY={false}>
                <MessagesList 
                    messages={messages} 
                    messagesEndRef={messagesEndRef} 
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
                            inputRef={inputRef} 
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

