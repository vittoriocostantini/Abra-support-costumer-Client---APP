import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import '../theme/ComponentsTheme/ChatPage.css';

const ChatPage = () => {
  const [buttonText, setButtonText] = useState('Click me');

  const handleClick = () => {
    setButtonText('Clicked!');
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>
          <h1>Chat</h1>
          <button onClick={handleClick}>{buttonText}</button>
        </div>
      </IonContent>
    </>
  );
};

export default ChatPage;
