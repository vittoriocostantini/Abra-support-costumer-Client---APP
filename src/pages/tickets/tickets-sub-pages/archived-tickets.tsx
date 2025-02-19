import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButtons, IonBackButton } from '@ionic/react';
import { hideTabBar } from '../../../services/tabs/tab-bar-view/tabbar-view';
import './archived-tickets.css';

const ArchivedTickets: React.FC = () => {
    hideTabBar();
  return (
    <IonPage>
        <IonHeader class="ion-no-border" className="archived-header" translucent>
            <IonToolbar>
                <IonTitle>Archivados</IonTitle>
                <IonButtons slot="start" >
                    <IonBackButton defaultHref="/tickets" text="Chats" className='back-button'/>
                </IonButtons>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen className='archived-content'>
       
            
            
        </IonContent>
    </IonPage>
  );
};

export default ArchivedTickets;
