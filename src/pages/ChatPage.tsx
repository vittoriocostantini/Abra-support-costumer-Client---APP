import React, { useState } from 'react';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonInput, IonButton } from '@ionic/react';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonList>
        {messages.map((message, index) => (
          <IonItem key={index}>{message}</IonItem>
        ))}
      </IonList>
      <IonItem>
        <IonInput
          value={newMessage}
          placeholder="Escribe un mensaje..."
          onIonChange={e => setNewMessage(e.detail.value!)}
        />
        <IonButton onClick={sendMessage}>Enviar</IonButton>
      </IonItem>
    </IonContent>
  );
};

export default ChatPage;