import React, { useRef, useState, useEffect } from 'react';
import { IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonFooter, 
    IonButtons, 
    IonBackButton, 
    IonButton, 
    IonIcon,
    IonInput,
    IonAvatar
} from '@ionic/react';
import './ChatPage.css';
import useKeyboardListeners from '../../hooks/chat/useKeyboardListeners';
import { send, person, personAddOutline } from 'ionicons/icons';
import ChatInput from './Chat-input/ChatInput';
import FileUploadButton from './File-Upload-service/FileUploadService';



// Componente funcional de React para la página de chat
const ChatPage: React.FC = () => {
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

    // Usa el hook para manejar los listeners del teclado
    useKeyboardListeners();

    // Efecto para detectar cambios en la visibilidad del teclado
    useEffect(() => {
        const handleKeyboardShow = () => setIsKeyboardVisible(true);
        const handleKeyboardHide = () => setIsKeyboardVisible(false);

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
    };

    const handleFilesSelected = (files: FileList) => {
        // Aquí puedes manejar los archivos subidos
        console.log(files);
    };

    // Renderiza la estructura de la página de chat
    return (
        <IonPage>
            <IonHeader class='ion-no-border'>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="pages/Tickets" text=""/>
                    </IonButtons>
                    <IonAvatar slot="start" className="chat-avatar">
                        <IonIcon size='large' icon={person} />
                    </IonAvatar>
                    <IonTitle>Nombre del agente</IonTitle>
                    <IonButton slot="end" fill="clear" onClick={handleButtonClick}>
                        <IonIcon icon={personAddOutline} size="large"/>
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
            </IonContent>
            <IonFooter className="chat-footer" class='ion-no-border' >
                <IonToolbar className="toolbar-footer" >
                    <FileUploadButton 
                        onFilesSelected={handleFilesSelected} 
                        handleButtonClick={handleButtonClick} 
                    />
                    <ChatInput inputRef={inputRef} />
                    <IonButton slot="end" fill="clear" className="chat-button-send" 
                    onClick={handleButtonClick}>
                        <IonIcon icon={send}/>
                    </IonButton>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

// Exporta el componente ChatPage como predeterminado
export default ChatPage;

