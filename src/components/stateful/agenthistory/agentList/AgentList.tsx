import React from 'react';
import { IonContent, IonList } from '@ionic/react';
import AgentItem from '../agentList/agentItem/AgentItem';
import '../../../../theme/ComponentsTheme/AgentList.css';

function AgentList() {
  const agents = [
    { name: 'Rick Astley', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Leeroy Jenkins', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Ionitron', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Wall-E', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Cortana', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Bender', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'BB-8', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'BB-9E', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
  ];

  return (
    <>
      <IonContent color="light" className="AgentList" >
        <IonList inset={true}>
          {agents.map((agent, index) => (
            <AgentItem key={index} name={agent.name} avatarUrl={agent.avatarUrl} />
          ))}
        </IonList>
      </IonContent>
    </>
  );
}

export default AgentList;
