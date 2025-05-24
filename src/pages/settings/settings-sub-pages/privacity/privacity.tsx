import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonToggle, IonButtons, IonBackButton, IonIcon, IonList } from '@ionic/react';
import { hideTabBar } from '../../../../services/tabs/tab-bar-view/tabbar-view';
import { lockClosed } from 'ionicons/icons';
import './privacity.css';
import { useTranslation } from 'react-i18next';

const Privacity: React.FC = () => {
  hideTabBar();
  const { t } = useTranslation('privacy');
  return (
    <IonPage>
      <IonHeader  className='privacity-header' class='ion-no-border' >
        <IonToolbar className='privacity-toolbar' >
          <IonButtons slot="start"  >
            <IonBackButton defaultHref="/settings" text={t('settings')} />
          </IonButtons>
          <IonTitle>{t('privacy')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='privacity-content' scrollY={false} fullscreen> 
       <IonItem className='privacity-item' lines="none" detail={false} >
        <IonLabel className='privacity-label'>
          <p><IonIcon size='small'  icon={lockClosed} />{t('privacyNote')}</p>
        </IonLabel>
       </IonItem>
       <IonList className='privacity-list'>  
        <IonItem detail={true} button>
          <IonLabel>
            <p>{t('profilePicture')}</p>
          </IonLabel>
        </IonItem>
        <IonItem detail={true} button>
          <IonLabel>
            <p>{t('preferredAgents')}</p>
          </IonLabel>
        </IonItem>
        <IonItem detail={true} button>
          <IonLabel>
            <p>{t('termsAndConditions')}</p>
          </IonLabel>
        </IonItem>
        <IonItem detail={true} button>
          <IonLabel>
            <p>{t('privacyPolicy')}</p>
          </IonLabel>
        </IonItem>
       </IonList>
       
      </IonContent>
      
    </IonPage>
  );
};

export default Privacity;