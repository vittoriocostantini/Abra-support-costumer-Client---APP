import React from 'react';
import { IonModal, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonItem, 
  IonLabel, 
  IonIcon 
} from '@ionic/react';

// Importa la interfaz y la lista de aplicaciones
import { AppItem, appItems } from './models/AppModels';



interface ModalAppsProps {
  isOpen: boolean;
  onDidDismiss: () => void;
  onSelectApp: (appLabel: string, appIcon: string) => void;
}

const ModalApps: React.FC<ModalAppsProps> = ({ isOpen, onDidDismiss, onSelectApp }) => {
  return (
    <IonModal 
      isOpen={isOpen} 
      onDidDismiss={onDidDismiss}
      className='modal-add'
      initialBreakpoint={1} 
      breakpoints={[0, 1]}
      backdropDismiss={false}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Apps</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {appItems.map((app, index) => (
          <IonItem 
            key={index} 
            button 
            lines="none" 
            detail={false} 
            onClick={() => onSelectApp(app.label, app.icon)}
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