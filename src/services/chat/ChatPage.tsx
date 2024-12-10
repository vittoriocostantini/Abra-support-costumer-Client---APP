import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonSearchbar, IonButtons, IonBackButton } from '@ionic/react';
import '../../theme/variables.css';
import './ChatPage.css';

const ChatPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                  <IonButtons slot="start">
                    <IonBackButton defaultHref="/Tickets" />
                  </IonButtons>
                    <IonTitle>Chat</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

            </IonContent>

            <IonFooter>
                <IonToolbar  >
                    <IonSearchbar></IonSearchbar>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default ChatPage;