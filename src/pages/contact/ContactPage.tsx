import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonButtons, IonMenuButton } from '@ionic/react'; // Añadir IonIcon
import '../../theme/Page-themes/ContactPage.css';
import AgentHistory from '../../components/stateful/agenthistory/AgentHistory';
import AgentList from '../../components/stateful/agenthistory/agentList/AgentList';


const ContactPage: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader className='header-home' translucent >
        <IonToolbar className='toolbar-home'>
          <IonTitle className='title-contact'>Contacta a un agente</IonTitle>
          <AgentHistory />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="light">
        <IonHeader collapse="condense" >
          <IonToolbar color="light">
            <IonTitle size="large">Contacta a un agente</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AgentList />
      </IonContent>
    </IonPage>
  );
};

export default ContactPage;