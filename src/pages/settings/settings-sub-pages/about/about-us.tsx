import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonToggle, IonButtons, IonBackButton } from '@ionic/react';
import { hideTabBar } from '../../../../services/tabs/tab-bar-view/tabbar-view';
import './about-us.css';

const AboutUs: React.FC = () => {
  hideTabBar();
  return (
    <IonPage>
      <IonHeader class='ion-no-border' >
        <IonToolbar>
          <IonButtons slot="start"  >
            <IonBackButton defaultHref="/settings" text="Ajustes" />
          </IonButtons>
          <IonTitle>Acerca de</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='content-about' scrollY={false}> 
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Acerca de</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='abra-logo'>
          <img src='assets/img/abra-logo.png' alt='Abra' />
          <p>Version 0.0.1</p>
        </div>
        <div className='about-us-content'>
        <p>Abra es una aplicacion de servicio al cliente general, 
          te permite contactar con agentes de servicio al cliente de diferentes empresas, asi mismo como gestionar tu soporte tecnico, tickets, 
          caso o situacion, brindamos un servicio de calidad y rapidez, sin bots ni mensajes automaticos.</p>
          <br/>
          <p>Priorizamos tu atencion a tu caso de manera rapida y efectiva, respondiendo casi de manera instantanea a tu solicitud de soporte, tambien 
            la resolucion de este y por supuesto, siempre escuchamos al cliente, para que este tenga la mejor experiencia.
          </p>
          </div>
      </IonContent>
      
    </IonPage>
  );
};

export default AboutUs;