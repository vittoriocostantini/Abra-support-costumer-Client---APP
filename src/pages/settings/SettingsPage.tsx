import React from 'react';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonItem, IonLabel, IonPage, IonButtons, IonMenuButton } from '@ionic/react';
import '../../theme/Page-themes/SettingsPage.css';

const SettingsPage: React.FC = () => (
  <IonPage>
    <IonHeader className='header-settings' translucent>
      <IonToolbar className='toolbar-settings'>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle className='title-settings'>Ajustes</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className='content-settings' fullscreen>
      <IonHeader collapse='condense'>
        <IonToolbar>
        <IonTitle size='large'>Ajustes</IonTitle>
        </IonToolbar>

      </IonHeader>
      
      <IonItem button lines="none" detail={false}>
        <IonLabel>Notificaciones</IonLabel>
      </IonItem>
      <IonItem button lines="none" detail={false}>
        <IonLabel>Privacidad</IonLabel>
      </IonItem>
      <IonItem button lines="none" detail={false}>
        <IonLabel>Idioma</IonLabel>
      </IonItem>
      <IonItem button lines="none" detail={false}>
        <IonLabel>Acerca de</IonLabel>
      </IonItem>
      <IonItem button lines="none" detail={false}>
        <IonLabel>Cerrar sesión</IonLabel>
      </IonItem>
      <IonItem lines="none" detail={false}>
        <IonLabel>Abra Support
        <h2>Version 1.0.0</h2>
        </IonLabel>
        
      </IonItem>
    </IonContent>
  </IonPage>
);

export default SettingsPage;