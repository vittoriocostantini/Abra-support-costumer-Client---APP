import React from 'react';
import {
  IonAvatar,
  IonChip,
  IonLabel,
  IonItem,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonBadge
} from '@ionic/react';
import './ticket-card.css';
import { useHistory } from 'react-router-dom';
import '../../theme/variables.css';
import { share, trash, archive, ellipse } from 'ionicons/icons';
import StatusIndicator from '../status-indicator/status-indicator';

// Define the type for the props
interface TicketsProduct {
  id: string;
  title: string;
  number: string;
  path: string;
  avatarUrl: string;
  imageAlt: string;
  status: string;
  date: string;
  agentName: string;
  icon?: JSX.Element;
}

const TicketCard: React.FC<TicketsProduct> = ({
  id,
  title,
  number,
  path,
  avatarUrl,
  imageAlt,
  status,
  date,
  agentName,
  icon
}) => {
  const history = useHistory();

  const handleCardClick = () => {
    history.push({
        pathname: `${path}${id}`,
        state: { agentName, avatarUrl }
    });
  };

  return (
    <IonItemSliding>
      <IonItem className="ticket-card" onClick={handleCardClick} id="ticketCard">
        <IonAvatar slot="end" className="avatar-agent">
          <img alt={imageAlt} src={avatarUrl} />
        </IonAvatar>
        <div className="app-select-card">
          {icon}
        </div>
        <IonBadge slot="end" className="badge-ticket">
          <p>1</p>
        </IonBadge>
        <IonLabel className="ticket-card-label">
          <h4 className="ticket-date"><IonIcon icon={ellipse}/>{date}</h4>
          <h1 className="ticket-title">{title}</h1>
          <IonLabel className="ticket-status">
            <div className="status-text">
              <h3 className="ticket-number"><IonIcon icon={ellipse}/>{number}</h3>
              <StatusIndicator status={status} />
              <h3 className="agent-name"><IonIcon icon={ellipse}/>{agentName}</h3>
            </div>
          </IonLabel>
        </IonLabel>
      </IonItem>
      <IonItemOptions className="option-start" side="start">
        <IonItemOption className="option-archive" expandable={true}>
          <IonIcon slot="top" size="large" icon={archive}/>
          Archive
        </IonItemOption>
      </IonItemOptions>
      <IonItemOptions className="option-end" side="end">
        <IonItemOption className="option-delete" expandable={true}>
          <IonIcon slot="top" size="large" icon={trash}/>
          Delete
        </IonItemOption>
        
      </IonItemOptions>
    </IonItemSliding>
  );
}

export default TicketCard;


/* ticket-card.tsx */