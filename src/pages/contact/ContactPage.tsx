import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonButtons, IonMenuButton } from '@ionic/react'; // Añadir IonIcon
import '../../theme/Page-themes/ContactPage.css';
import AgentHistory from '../../components/agent-history/AgentHistory';
import AgentList from '../../components/agent-history/agentList/AgentList';
import { useIonViewDidEnter } from '@ionic/react';
import { showTabBar } from '../../services/tabs/tabbarview/Tab-Bar-View';


const ContactPage: React.FC = () => {
  useIonViewDidEnter(() => {
    showTabBar();
  });
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