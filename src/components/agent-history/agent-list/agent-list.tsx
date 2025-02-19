import React from 'react';
import { IonList, IonItem, IonAvatar, IonLabel, IonItemSliding } from '@ionic/react';
import '../../../theme/components-themes/agent-list.css';

interface Agent {
  id: number;
  name: string;
  role: string;
  avatarUrl: string;
}

const agents: Agent[] = [
  { id: 1, name: 'Rick Astley', role: 'Agent', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
  { id: 2, name: 'Leeroy Jenkins', role: 'Agent', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
  { id: 3, name: 'Ionitron', role: 'Agent', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
  { id: 4, name: 'Wall-E', role: 'Agent', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
  { id: 5, name: 'Cortana', role: 'Agent', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
  { id: 6, name: 'Bender', role: 'Agent', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
  { id: 7, name: 'BB-8', role: 'Agent', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
];

function AgentList() {
  return (
    <>
      <IonList inset={true} className='agent-list'>
        {agents.map(agent => (
          <IonItemSliding key={agent.id}>
            <IonItem button detail={false}> 
              <IonAvatar slot="start">
                <img src={agent.avatarUrl} alt="Avatar" />
              </IonAvatar>
              <IonLabel>
                <h2>{agent.name}</h2>
                <p>{agent.role}</p>
              </IonLabel>
            </IonItem>
          </IonItemSliding>
        ))}
      </IonList>
    </>
  );
}

export default AgentList;

/* agent-list.tsx */