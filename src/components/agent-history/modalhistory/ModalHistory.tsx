import React from 'react';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import AgentItem from '../agentList/agentItem/AgentItem';
import { agentsData } from '../../../Agents/agentData';
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
          <AgentItem key={agent.id} name={agent.name} avatarUrl={agent.avatar}/>
        ))}
      </IonContent>
    </IonModal>
  );
};

export default ModalHistory;
