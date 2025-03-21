import React from 'react';
import { IonModal, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonItem, 
  IonLabel, 
  IonIcon,
  IonPage
} from '@ionic/react';

// Importa la interfaz y la lista de aplicaciones
import { AppItem, appItems } from './models/app-models';
import './modal-apps.css';


interface ModalAppsProps {
  isOpen: boolean;
  onDidDismiss: () => void;
  onSelectApp: (appLabel: string, appIcon: string, appColor: string) => void;
}

const ModalApps: React.FC<ModalAppsProps> = ({ isOpen, onDidDismiss, onSelectApp }) => {
  return (
    <IonPage>
    <IonModal 
      isOpen={isOpen} 
      onDidDismiss={onDidDismiss}
      className='modal-add'
      initialBreakpoint={1} 
      breakpoints={[0, 1]}
      backdropDismiss={true}
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
            onClick={() => onSelectApp(app.label, app.icon, app.color)}
            className={`app-item-${app.label.toLowerCase()}`}
          >
            <IonLabel>{app.label}</IonLabel>
            <IonIcon size="large" slot="start" icon={app.icon}></IonIcon>
          </IonItem>
        ))}
      </IonContent>
    </IonModal>
    </IonPage>
  );
};

export default ModalApps;

/* modal-apps.tsx */