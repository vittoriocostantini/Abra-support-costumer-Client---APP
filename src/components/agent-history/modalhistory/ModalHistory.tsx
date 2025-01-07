import React from 'react';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

interface ModalHistoryProps {
  isOpen: boolean;
  onDidDismiss: () => void;
}

const ModalHistory: React.FC<ModalHistoryProps> = ({ isOpen, onDidDismiss }) => {
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
          <IonTitle>Historial de Agentes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>
          <h1>Aqui va el historial del ultimo agente que te ayudo
            podras a;adirlo o revisar el chat de este
          </h1>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default ModalHistory;
