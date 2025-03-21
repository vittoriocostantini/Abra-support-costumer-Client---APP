import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonButtons, IonMenuButton } from '@ionic/react'; // Añadir IonIcon
import '../../theme/page-themes/contact-page.css';
import AgentHistory from '../../components/agent-history/agent-history';
import AgentList from '../../components/agent-history/agent-list/agent-list';
import { useIonViewDidEnter } from '@ionic/react';
import { showTabBar } from '../../services/tabs/tab-bar-view/tabbar-view';
import { agentsData } from '../../data/agents-data/agent-data';


const ContactPage: React.FC = () => {
  useIonViewDidEnter(() => {
    showTabBar();
  });
  return (
    <IonPage>
      <IonHeader className='header-home'  >
        <IonToolbar className='toolbar-home'>
          <IonTitle  >Prefiere un agente</IonTitle>
          <AgentHistory />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='content-contact'  >
        <IonHeader collapse="condense" >
          <IonToolbar>
            <IonTitle className='title-contact' size='large' >Prefiere un agente</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AgentList agents={agentsData} />
      </IonContent>
    </IonPage>
  );
};

export default ContactPage;

/* contact-page.tsx */