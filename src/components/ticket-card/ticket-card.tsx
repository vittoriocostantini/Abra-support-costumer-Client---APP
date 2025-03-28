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
import { countUnreadMessages } from '../../hooks/chat/message-notification/message-count';
import { TicketsProduct } from './models/ticket-model'; // Importar el modelo TicketsProduct

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
  icon,
  messages,
}) => {
  
  const history = useHistory();

  // Contar los mensajes no leídos para este ticket
  const unreadCount = countUnreadMessages(messages, id);

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
      
        {unreadCount > 0 ? (
          <IonBadge
            slot="end"
            className="badge-ticket"
            style={{
              animation: unreadCount > 0 ? 'appear 0.3s forwards' : 'disappear 0.3s forwards',
              opacity: unreadCount > 0 ? 1 : 0,
            }}
          >
            {unreadCount}
          </IonBadge>
        ) : null}
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


