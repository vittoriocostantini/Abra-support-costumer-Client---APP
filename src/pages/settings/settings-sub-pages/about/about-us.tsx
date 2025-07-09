import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonToggle, IonButtons, IonBackButton, useIonViewDidEnter } from '@ionic/react';
import './about-us.css';
import { useTranslation } from 'react-i18next';

const AboutUs: React.FC = () => {

  const { t } = useTranslation('about');
  return (
    <IonPage>
      <IonHeader class='ion-no-border' >
        <IonToolbar>
          <IonButtons slot="start"  >
            <IonBackButton defaultHref="/settings" text={t('settings')} />
          </IonButtons>
          <IonTitle>{t('about')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='content-about' scrollY={false}> 
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>{t('about')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='abra-logo'>
          <img src='assets/img/abra-logo.png' alt='Abra' />
          <p>{t('version')} 0.0.1</p>
        </div>
        <div className='about-us-content'>
        <p>{t('aboutNote')}</p>
          <br/>
          <p>{t('aboutNote2')}
          </p>
          </div>
      </IonContent>
      
    </IonPage>
  );
};

export default AboutUs;