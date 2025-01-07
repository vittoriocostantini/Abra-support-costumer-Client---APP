import React, { useRef, useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButtons, IonBackButton, IonButton, IonIcon, IonAvatar } from '@ionic/react';
import { send, person, personAddOutline } from 'ionicons/icons';
import './ChatPage.css';
import { handleFilesSelected } from '../../hooks/chat/FileUpload/fileHandlers';
import ChatInput from '../../components/chat-utils/Chat-input/ChatInput';
import FileUploadButton from '../../components/chat-utils/File-Upload-Service/FileUploadService';
import { sendMessage, scrollToBottom } from '../../hooks/chat/utils/chatUtils';
import MessagesList from '../../components/chat-utils/Message-Container/MessageList';
import  '../../theme/variables.css';
import { hideTabBar } from '../../services/tabs/tabbarview/Tab-Bar-View';
import { useKeyboardListeners } from '../../hooks/chat/keyboard/keyboardHandler';
// Componente funcional de React para la página de chat
const ChatPage: React.FC = () => {
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const keyboardHeight = useRef<number>(0);
    

    // Oculta el tab bar
    hideTabBar();

    //importa logica de teclado para ajustar la altura de la aplicacion
    
    useKeyboardListeners();

    // Usa el hook para manejar los listeners del teclado

    // Efecto para detectar cambios en la visibilidad del teclado
    useEffect(() => {
        const handleKeyboardShow = (event: any) => {
            keyboardHeight.current = event.keyboardHeight; // Asegúrate de que este valor se esté estableciendo
            setIsKeyboardVisible(true);
        };

        const handleKeyboardHide = () => {
            keyboardHeight.current = 0; // Restablecer a 0 cuando el teclado se oculta
            setIsKeyboardVisible(false);
        };

        window.addEventListener('keyboardDidShow', handleKeyboardShow);
        window.addEventListener('keyboardDidHide', handleKeyboardHide);

        return () => {
            window.removeEventListener('keyboardDidShow', handleKeyboardShow);
            window.removeEventListener('keyboardDidHide', handleKeyboardHide);
        };
    }, []);

    // Función para manejar el clic en los botones sin ocultar el teclado
    const handleButtonClick = (event: React.MouseEvent<HTMLIonButtonElement>) => {
        event.preventDefault();
        if (isKeyboardVisible && inputRef.current) {
            inputRef.current.focus();
        }
        sendMessageHandler(); // Llama a sendMessage al hacer clic en el botón
    };

    const sendMessageHandler = () => {
        sendMessage(message, setMessages); // Llama a la función importada
        setMessage(''); // Limpiar el mensaje
        if (inputRef.current) {
            inputRef.current.value = ''; // Limpiar el contenido
            inputRef.current.style.height = 'auto'; // Restablecer la altura
        }
    };

    const scrollToBottomHandler = () => {
        scrollToBottom(messagesEndRef); // Llama a la función importada

    };

    useEffect(() => {
        scrollToBottomHandler(); // Desplazar hacia abajo cada vez que cambian los mensajes
        
    }, [messages]);



    // Renderiza la estructura de la página de chat
    return (
        <IonPage className='chat-page'>
            <IonHeader className='header-chat'>
                <IonToolbar className='toolbar-header'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="pages/Tickets" text=""/>
                    </IonButtons>
                    <div className='agent-info'>
                        <IonAvatar slot="start" className="chat-avatar">
                            <IonIcon size='large' icon={person} />
                        </IonAvatar>
                        <IonTitle className='agent-title'>Nombre del agente</IonTitle>
                    </div>
                    <IonButton slot="end" fill="clear" onClick={handleButtonClick}>
                        <IonIcon icon={personAddOutline} size="large"/>
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent id='chat-container' fullscreen scrollY={false} >
                <MessagesList 
                    messages={messages} 
                    messagesEndRef={messagesEndRef} 
                    keyboardHeight={keyboardHeight.current}
                />
            </IonContent>
            <IonFooter className="chat-footer"  id='chat-footer'>
                <IonToolbar className="toolbar-footer">
                    <FileUploadButton 
                        onFilesSelected={handleFilesSelected} 
                        handleButtonClick={handleButtonClick} 
                    />
                    <ChatInput 
                        inputRef={inputRef} 
                        value={message}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                    />
                    <IonButton slot="end" fill="clear" className="chat-button-send" onClick={handleButtonClick}>
                        <IonIcon icon={send}/>
                    </IonButton>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

// Exporta el componente ChatPage como predeterminado
export default ChatPage;

