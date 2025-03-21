import React from 'react';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import AgentItem from '../agent-list/agent-item/agent-item';
import { agentsData } from '../../../data/agents-data/agent-data';
interface ModalHistoryProps {
  isOpen: boolean;
  onDidDismiss: () => void;
}

const ModalHistory: React.FC<ModalHistoryProps> = ({ isOpen, onDidDismiss    }) => {
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
        {agentsData.map(agent => (
          <AgentItem key={agent.name} name={agent.name} avatarUrl={agent.avatar}/>
        ))}
      </IonContent>
    </IonModal>
  );
};

export default ModalHistory;

/* modal-history.tsx */