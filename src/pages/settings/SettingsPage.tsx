import React from 'react';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonItem, IonLabel, IonPage } from '@ionic/react';
import '../../theme/TabsApp/SettingsPage.css';

const SettingsPage: React.FC = () => (
  <IonPage>
    <IonHeader className='header-settings' translucent>
      <IonToolbar className='toolbar-settings'>
        <IonTitle className='title-settings'>Ajustes</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className='content-settings' fullscreen>
      <IonHeader collapse='condense'>
        <IonToolbar>
        <IonTitle size='large'>Ajustes</IonTitle>
        </IonToolbar>

      </IonHeader>
      
      <IonItem button onClick={() => console.log('Notificaciones clickeado')}>
        <IonLabel>Notificaciones</IonLabel>
      </IonItem>
      <IonItem button onClick={() => console.log('Privacidad clickeado')}>
        <IonLabel>Privacidad</IonLabel>
      </IonItem>
      <IonItem button onClick={() => console.log('Idioma clickeado')}>
        <IonLabel>Idioma</IonLabel>
      </IonItem>
      <IonItem button onClick={() => console.log('Acerca de clickeado')}>
        <IonLabel>Acerca de</IonLabel>
      </IonItem>
      <IonItem button onClick={() => console.log('Cerrar sesión clickeado')}>
        <IonLabel>Cerrar sesión</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Abra Support
        <h2>Version 1.0.0</h2>
        </IonLabel>
        
      </IonItem>
    </IonContent>
  </IonPage>
);

export default SettingsPage;