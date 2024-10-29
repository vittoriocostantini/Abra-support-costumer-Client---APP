import React, { useEffect } from 'react';
import { Keyboard } from '@capacitor/keyboard';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonInput, IonIcon, useIonRouter } from '@ionic/react';
import { send, chevronBackOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import "./ChatPage.css";
import KeyboardHandler from './chatmanager/hooks/KeyboardHandler';
import KeyboardManager from './chatmanager/hooks/KeyboardManager';
import KeyboardListeners from './chatmanager/hooks/KeyboardListeners';
import { 
  useSendIconState, 
  useKeyboardVisibilityState, 
  useInputRef, 
  handleKeyboardShow, 
  handleKeyboardHide, 
  handleSendClick 
} from './chatmanager/hooks/chatUtils';

// Componente funcional de React para la página de chat
const ChatPage: React.FC = () => {
  const [isClicked, setIsClicked] = useSendIconState();
  const [isKeyboardVisible, setIsKeyboardVisible] = useKeyboardVisibilityState();
  const inputRef = useInputRef();
  const history = useHistory();
  const router = useIonRouter();

  // Efecto para configurar los listeners del teclado
  useEffect(() => {
    let showListener: any;
    let hideListener: any;

    // Función asíncrona para configurar los listeners
    const setupListeners = async () => {
      // Listener para cuando el teclado va a aparecer
      showListener = await Keyboard.addListener("keyboardWillShow", () => {
        setIsKeyboardVisible(true);
      });

      // Listener para cuando el teclado va a desaparecer
      hideListener = await Keyboard.addListener("keyboardWillHide", () => {
        setIsKeyboardVisible(false);
      });
    };

    setupListeners();

    // Limpiar los listeners al desmontar el componente
    return () => {
      if (showListener) showListener.remove();
      if (hideListener) hideListener.remove();
    };
  }, []);

  return (
    <IonPage>
      {/* Componente para manejar el teclado */}
      <KeyboardHandler />
      <KeyboardManager 
        onKeyboardShow={() => handleKeyboardShow(setIsKeyboardVisible)} 
        onKeyboardHide={() => handleKeyboardHide(setIsKeyboardVisible)} 
      />
      <KeyboardListeners 
        onKeyboardShow={() => handleKeyboardShow(setIsKeyboardVisible)} 
        onKeyboardHide={() => handleKeyboardHide(setIsKeyboardVisible)} 
      />
      <IonHeader translucent className='chat-header'>
        <IonToolbar>
          {/* Icono para volver atrás en el historial */}
          <IonIcon 
            icon={chevronBackOutline} 
            slot="start" 
            onClick={() => router.push('/pages/Tickets', 'back')}
            className='back-icon'
          />
          <IonTitle>Chat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
       
        <h1>Hola</h1>
        <h1>Hola</h1>
        <h1>Hola</h1>
        <h1>Hola</h1>
        <h1>Hola</h1>
        <h1>Hola</h1>
        <h1>Hola</h1>
        <h1>Hola</h1>
        <h1>Hola</h1>
        <h1>Hola</h1>
     
      </IonContent>
      <IonFooter >
        <IonToolbar  style={{ paddingBottom: '50px' }}>
          {/* Input de texto para escribir mensajes */}
          <input 
            type="text" 
            placeholder="Escribe tu mensaje aquí" 
            className="chat-input"
            ref={inputRef}
            onFocus={(e) => e.stopPropagation()} // Evitar que el foco se propague
          />
          {/* Icono de enviar mensaje */}
          <IonIcon 
            icon={send} 
            slot='end' 
            className={`send-icon ${isClicked ? 'send-icon-grow' : ''}`} 
            onClick={(e) => {
              if (!isKeyboardVisible) {
                e.preventDefault(); // Evitar que el teclado suba si está oculto
              }
              handleSendClick(e, setIsClicked, isKeyboardVisible, inputRef);
            }}
          />
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ChatPage;
