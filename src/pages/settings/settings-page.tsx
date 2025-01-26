import React, { useState } from 'react';
import { IonContent, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonItem, 
  IonLabel, 
  IonPage, 
  IonIcon, 
  IonRouterLink, 
  IonToggle,
  IonList,
  IonModal,
  IonButton,
} from '@ionic/react';
import '../../theme/page-themes/settings-page.css';
import { notifications, lockClosed, language, informationCircle, logOut, documentText, logIn } from 'ionicons/icons';
import { useIonViewDidEnter } from '@ionic/react';
import { showTabBar } from '../../services/tabs/tab-bar-view/tabbar-view';
import FeedbackForm from '../../components/feedback-form/feedback-form';

// Definición de la interfaz IonItemButton
interface IonItemButton {
  label: string;
  icon: string;
  onClick: () => void;
  route?: string;
  className?: string;
}

// Array de objetos que siguen la estructura de la interfaz IonItemButton
const itemButtons: IonItemButton[] = [
  { label: 'Notificaciones', icon: notifications, onClick: () => console.log('Notificaciones clicked'), className: 'item-notificaciones' },
  { label: 'Privacidad & seguridad', icon: lockClosed, onClick: () => console.log('Privacidad clicked'), route: '/sub-pages/Privacity', className: 'item-privacidad' },
  { label: 'Idioma', icon: language, onClick: () => console.log('Idioma clicked'), route: '/sub-pages/Languaje', className: 'item-idioma' },
  { label: 'Acerca de', icon: informationCircle, onClick: () => console.log('Acerca de clicked'), route: '/sub-pages/AboutUs', className: 'item-acerca-de' },
  { label: 'Cerrar sesión', icon: logOut, onClick: () => console.log('Cerrar sesión clicked'), className: 'item-cerrar-sesion' },
  { label: 'Feedback', icon: documentText, onClick: () => console.log('Enviar feedback clicked'), route: '/sub-pages/Feedback', className: 'item-feedback' },
  
];


const SettingsPage: React.FC = () => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  useIonViewDidEnter(() => {
    showTabBar();
  });
  
  return (
  <IonPage>
    <IonHeader className='header-settings' translucent>
      <IonToolbar className='toolbar-settings'>
        <IonTitle className='title-settings'>Ajustes</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className='content-settings' fullscreen>
      <IonHeader collapse='condense' class='header-settings-condense'>
        <IonToolbar class='toolbar-settings-condense'> 
          <IonTitle size='large'>Ajustes</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonList className='list-settings'>
        {itemButtons.map((item, index) => (
          <IonRouterLink routerLink={item.label === 'Feedback' ? undefined : item.route} key={index}>
            <IonItem button lines="none" detail={false} onClick={() => {
              if (item.label === 'Feedback') {
                setShowFeedbackModal(true);
              } else {
                item.onClick();
              }
            }} className={`item-settings ${item.className}`}>
              <IonLabel className='label-settings-normal'>{item.label}</IonLabel>
              {item.label === 'Notificaciones' ? (
                <>
                  <IonIcon size="large" slot="start" icon={item.icon}></IonIcon>
                  <IonToggle slot="end" onIonChange={() => item.onClick()} color='success' />
                </>
              ) : (
                <IonIcon size="large" slot="start" icon={item.icon}></IonIcon>
              )}
            </IonItem>
          </IonRouterLink>
        ))}
      </IonList>
      <IonItem button detail={false} className='item-login'>
      <IonIcon icon={logIn} size='large' slot="start"></IonIcon>
        <IonLabel>Iniciar sesión</IonLabel>
        </IonItem>
      <IonItem lines="none" detail={false} className='about-us-item'> 
        <IonLabel><b>Abra Support</b>
        <h2>Version 0.0.1</h2>
        </IonLabel>
      </IonItem>
    </IonContent>
    <FeedbackForm isOpen={showFeedbackModal} onClose={() => setShowFeedbackModal(false)} />
  </IonPage>
);
}

export default SettingsPage;

/* settings-page.tsx */