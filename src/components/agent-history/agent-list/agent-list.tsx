import React from 'react';
import { IonList, IonItem, IonAvatar, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonIcon } from '@ionic/react';
import '../../../theme/components-themes/agent-list.css';
import { happy, personRemove } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';

interface Agent {
  id: number;
  name: string;
  avatar: string;
}

interface AgentListProps {
  agents: Agent[];
}

function AgentList({ agents }: AgentListProps) {
  const { t } = useTranslation('agent');
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
                <p>{t('agent')}</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end" className='option-container'>
              <IonItemOption className='option-prefer'>
                <IonIcon slot="top" size="large" icon={happy}/>
                {t('prefer')}
              </IonItemOption>
              <IonItemOption className='option-block'>
                <IonIcon slot="top" size="large" icon={personRemove}/>
                {t('block')}
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