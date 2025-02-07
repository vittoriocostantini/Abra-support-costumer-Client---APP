import React, { useState } from 'react';
import { IonButtons, IonButton, IonIcon } from '@ionic/react';
import { peopleCircleOutline } from 'ionicons/icons';
import '../../theme/components-themes/agent-history.css';
import ModalHistory from './modal-history/modal-history';

interface AgentHistoryProps {
}

const AgentHistory: React.FC<AgentHistoryProps> = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <IonButton 
        onClick={() => setShowModal(true)} 
        slot='end'
        fill='clear'
        className='button-history'>
          <IonIcon icon={peopleCircleOutline} size="large" className='icon-history'></IonIcon>
        </IonButton>
      <ModalHistory 
        isOpen={showModal} 
        onDidDismiss={() => setShowModal(false)}
      />
    </>
  );
};

export default AgentHistory;

/* agent-history.tsx holahola */