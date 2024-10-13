import React from 'react';
import { IonContent, IonFooter, IonToolbar, IonIcon } from '@ionic/react';
import { send } from 'ionicons/icons';
import '../theme/ChatPage.css';

function ChatPage({ nav }: { nav: HTMLIonNavElement }) {
  return (
    <>
      <IonContent>
        <h1>Chat para z</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2>Hola</h2>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <div className="input-container">
            <input 
              className="ion-chat-input-message"
            />
            <IonIcon 
              icon={send} 
                onClick={() => {
                // Lógica para manejar el clic en el icono
              }}
              className="ion-chat-icon"
            />
          </div>
        </IonToolbar>
      </IonFooter>
    </>
  );
};

export default ChatPage;
