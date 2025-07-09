import React from 'react';
import { IonAvatar, IonItem, IonLabel } from '@ionic/react';

interface AgentItemProps {
  name: string;
  avatarUrl: string;
  
}

const AgentItem: React.FC<AgentItemProps> = ({ name, avatarUrl }) => {
  return (
    <>
        <IonItem button={true} detail={false}>
          <IonAvatar aria-hidden="true" slot="start">
          <img alt="" src={avatarUrl} />
        </IonAvatar>
        <IonLabel>{name}</IonLabel>
      </IonItem>

    </>
  );
};

export default AgentItem;

/* agent-item.tsx */