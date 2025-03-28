import React from 'react';
import { IonAvatar, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel } from '@ionic/react';
import { pin, share, trash } from 'ionicons/icons';

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