import React, { RefObject, useState } from 'react';
import { 
  IonModal, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonItem, 
  IonLabel, 
  IonIcon
} from '@ionic/react';

// Importa la interfaz y la lista de aplicaciones
import { AppItem, appItems } from '../../../models/submit-modal-apps/app-models';
import './modal-apps.css';

interface ModalAppsProps {
  modalRef: RefObject<HTMLIonModalElement>;
  onSelectApp: (appLabel: string, appIcon: string, appColor: string) => void;
}

const ModalApps: React.FC<ModalAppsProps> = ({ modalRef, onSelectApp }) => {
  const [isHideBackdrop, setIsHideBackdrop] = useState(false);
  
  // Función para manejar la selección de app y cerrar el modal
  const handleAppSelection = (app: AppItem) => {
    onSelectApp(app.label, app.icon, app.color);
  };

  return (
    <IonModal 
      ref={modalRef}
      trigger="open-apps-modal"
      className={`modal-add ${isHideBackdrop ? 'hide-backdrop' : ''}`}
      initialBreakpoint={1} 
      breakpoints={[0, 1]}
      backdropDismiss={true}
      onWillDismiss={() => setIsHideBackdrop(true)}
      onDidDismiss={() => setIsHideBackdrop(false)}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Apps</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='content-modal' scrollY={true}>
        {appItems.map((app, index) => (
          <IonItem 
            key={index} 
            button 
            lines="none" 
            detail={false} 
            onClick={() => handleAppSelection(app)}
            className={`app-item-${app.label.toLowerCase()}`}
          >
            <IonLabel>{app.label}</IonLabel>
            <IonIcon size="large" slot="start" icon={app.icon}></IonIcon>
          </IonItem>
        ))}
      </IonContent>
    </IonModal>
  );
};

export default ModalApps;
/* modal-apps.tsx */
