import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonButtons, IonMenuButton } from '@ionic/react'; // Añadir IonIcon
import '../../theme/page-themes/contact-page.css';
import AgentList from '../../components/agent-history/agent-list/agent-list';
import { useIonViewDidEnter } from '@ionic/react';
import { agentsData } from '../../data/agents-data/agent-data';
import { useTranslation } from 'react-i18next';

const ContactPage: React.FC = () => {
  const { t } = useTranslation('contact');
 
  return (
    <IonPage>
      <IonHeader className='header-home'  >
        <IonToolbar className='toolbar-home'>
          <IonTitle  >{t('preferAgent')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='content-contact'  >
        <IonHeader collapse="condense" >
          <IonToolbar>
            <IonTitle className='title-contact' size='large' >{t('preferAgent')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AgentList agents={agentsData} />
      </IonContent>
    </IonPage>
  );
};

export default ContactPage;

/* contact-page.tsx */