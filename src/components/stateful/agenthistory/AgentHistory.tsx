import React, { useState } from 'react';
import { IonButtons, IonButton, IonIcon } from '@ionic/react';
import { peopleCircleOutline } from 'ionicons/icons';
import '../../../theme/ComponentsTheme/AgentHistory.css';
import ModalHistory from './modalhistory/ModalHistory';

interface AgentHistoryProps {
}

const AgentHistory: React.FC<AgentHistoryProps> = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <IonButtons slot="end">
        <IonButton onClick={() => setShowModal(true)}>
          <IonIcon icon={peopleCircleOutline} size="large"></IonIcon>
        </IonButton>
      </IonButtons>
      <ModalHistory 
        isOpen={showModal} 
        onDidDismiss={() => setShowModal(false)}
      />
    </>
  );
};

export default AgentHistory;