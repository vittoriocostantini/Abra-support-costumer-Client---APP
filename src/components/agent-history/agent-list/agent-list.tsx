import React from 'react';
import { IonList, IonItem, IonAvatar, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonIcon } from '@ionic/react';
import '../../../theme/components-themes/agent-list.css';
import { star, happy, personRemove } from 'ionicons/icons';
interface Agent {
  id: number;
  name: string;
  avatar: string;
}

interface AgentListProps {
  agents: Agent[];
}

function AgentList({ agents }: AgentListProps) {
  return (
    <>
      <IonList inset={true} className='agent-list'>
        {agents.map(agent => (
          <IonItemSliding key={agent.id}>
            <IonItem button detail={false}> 
              <IonAvatar slot="start">
                <img src={agent.avatar} alt="Avatar" />
              </IonAvatar>
              <IonLabel>
                <h2>{agent.name}</h2>
                <p>Agente</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end" className='option-container'>
              <IonItemOption className='option-prefer'>
                <IonIcon slot="top" size="large" icon={happy}/>
                Preferir
              </IonItemOption>
              <IonItemOption className='option-block'>
                <IonIcon slot="top" size="large" icon={personRemove}/>
                Bloquear
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        ))}
        
      </IonList>
    </>
  );
}

export default AgentList;

/* agent-list.tsx */