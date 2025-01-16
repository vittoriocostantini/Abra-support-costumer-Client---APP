import React from 'react';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonItem, IonLabel, IonPage, IonButtons, IonMenuButton, IonIcon } from '@ionic/react';
import '../../theme/page-themes/settings-page.css';
import { notifications, lockClosed, language, informationCircle, logOut } from 'ionicons/icons';
import { useIonViewDidEnter } from '@ionic/react';
import { showTabBar } from '../../services/tabs/tab-bar-view/tabbar-view';

// Definición de la interfaz IonItemButton
interface IonItemButton {
  label: string;
  icon: string;
  onClick: () => void;
}

// Array de objetos que siguen la estructura de la interfaz IonItemButton
const itemButtons: IonItemButton[] = [
  { label: 'Notificaciones', icon: notifications, onClick: () => console.log('Notificaciones clicked') },
  { label: 'Privacidad', icon: lockClosed, onClick: () => console.log('Privacidad clicked') },
  { label: 'Idioma', icon: language, onClick: () => console.log('Idioma clicked') },
  { label: 'Acerca de', icon: informationCircle, onClick: () => console.log('Acerca de clicked') },
  { label: 'Cerrar sesión', icon: logOut, onClick: () => console.log('Cerrar sesión clicked') },
];


const SettingsPage: React.FC = () => {
  useIonViewDidEnter(() => {
    showTabBar();
  });
  
  return (
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
      {itemButtons.map((item, index) => (
        <IonItem button lines="none" detail={false} key={index} onClick={item.onClick}>
          <IonLabel>{item.label}</IonLabel>
          <IonIcon size="large" slot="start" icon={item.icon}></IonIcon>
        </IonItem>
      ))}
      <IonItem lines="none" detail={false}> 
        <IonLabel>Abra Support
        <h2>Version 1.0.0</h2>
        </IonLabel>
      </IonItem>
    </IonContent>
  </IonPage>
);
}

export default SettingsPage;
