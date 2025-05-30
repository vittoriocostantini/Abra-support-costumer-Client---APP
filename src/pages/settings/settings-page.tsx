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
import FeedbackForm from '../../components/feedback-form/feedback-form';
import { useTranslation } from 'react-i18next';
import FooterTickets from '../../components/footer-tickets-page/footer-tickets';

// Definición de la interfaz IonItemButton
interface IonItemButton {
  label: string;
  icon: string;
  onClick: () => void;
  route?: string;
  className?: string;
}

const SettingsPage: React.FC = () => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const { t } = useTranslation('settings');

  // Array de objetos que siguen la estructura de la interfaz IonItemButton
  const itemButtons: IonItemButton[] = [
    { label: t('notifications'), icon: notifications, onClick: () => console.log('Notificaciones clicked'), className: 'item-notificaciones' },
    { label: t('privacy'), icon: lockClosed, onClick: () => console.log('Privacidad clicked'), route: '/settings/privacity', className: 'item-privacidad' },
    { label: t('language'), icon: language, onClick: () => console.log('Idioma clicked'), route: '/settings/languaje', className: 'item-idioma' },
    { label: t('about'), icon: informationCircle, onClick: () => console.log('Acerca de clicked'), route: '/settings/about', className: 'item-acerca-de' },
    { label: t('logout'), icon: logOut, onClick: () => console.log('Cerrar sesión clicked'), className: 'item-cerrar-sesion' },
    { label: t('feedback'), icon: documentText, onClick: () => console.log('Enviar feedback clicked'), route: '/settings/feedback', className: 'item-feedback' },
  ];

  
  return (
    <IonPage>
      <IonHeader className='header-settings' >
        <IonToolbar className='toolbar-settings'>
          <IonTitle className='title-settings'>{t('settings')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='content-settings' fullscreen scrollY={false}>
        <IonHeader collapse='condense' class='header-settings-condense'>
          <IonToolbar class='toolbar-settings-condense'> 
            <IonTitle size='large'>{t('settings')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonList className='list-settings'>
          {itemButtons.map((item, index) => (
            <IonRouterLink routerLink={item.label === t('feedback') ? undefined : item.route} key={index}>
              <IonItem button lines="none" detail={false} onClick={() => {
                if (item.label === t('feedback')) {
                  setShowFeedbackModal(true);
                } else {
                  item.onClick();
                }
              }} className={`item-settings ${item.className}`}>
                <IonLabel className='label-settings-normal'>{item.label}</IonLabel>
                {item.label === t('notifications') ? (
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
        <IonItem button detail={false} className='item-login' lines="none" routerLink='/log-in'>
          <IonIcon icon={logIn} size='large' slot="start"></IonIcon>
          <IonLabel>{t('login')}</IonLabel>
        </IonItem>
        <IonItem lines="none" detail={false} className='about-us-item'> 
          <IonLabel><b>Abra</b>
            <h2>{t('version')} 0.0.1</h2>
          </IonLabel>
        </IonItem>
      </IonContent>
      <FooterTickets />
      <FeedbackForm isOpen={showFeedbackModal} onClose={() => setShowFeedbackModal(false)} />
    </IonPage>
  );
}

export default SettingsPage;

/* settings-page.tsx */