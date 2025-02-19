import React, { useState } from 'react';
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
import { share, trash, archive, ellipse, headsetOutline } from 'ionicons/icons';
import StatusIndicator from '../status-indicator/status-indicator';
import { countUnreadMessages } from '../../hooks/chat/message-notification/message-count';
import { TicketsProduct } from './models/ticket-model'; // Importar el modelo TicketsProduct
import { resetUnreadMessages } from '../../hooks/chat/reset-service-messages/reset-unread-messages'; // Importar la función
import { getCurrentTime } from '../../services/time-service/time-service';

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

  const [displayedTimestamp] = useState(getCurrentTime());

  const history = useHistory();

  const isInChat = history.location.pathname === `${path}${id}`; // Verificar si estás exactamente en el chat actual

  console.log(`isInChat: ${isInChat}, currentPath: ${history.location.pathname}, expectedPath: ${path}${id}`); // Log para depuración

  // Contar los mensajes no leídos para este ticket
  const unreadCount = countUnreadMessages(messages, id, isInChat);

  const handleCardClick = () => {
    resetUnreadMessages(id); // Reiniciar el contador de mensajes no leídos
    history.push({
        pathname: `${path}${id}`,
        state: { agentName, avatarUrl }
    });
  };

  return (
    <IonItemSliding>
      <IonItem  detail={false} className="ticket-card" onClick={handleCardClick} id="ticketCard">
        <div className="app-select-card">
          {icon}
        </div>
      
        {unreadCount > 0 && (
          <IonBadge
            slot="end"
            className="badge-ticket"
            style={{
              animation: 'appear 0.3s forwards',
              opacity: 1,
            }}
          >
            {unreadCount}
          </IonBadge>
        )}
        
        <IonLabel className="ticket-card-label">
          <h1 className="ticket-title">{title}</h1>
          <h4 className="ticket-date"><IonIcon icon={ellipse}/>{date}          
          <span className='time-stamp'><IonIcon icon={ellipse}/>{displayedTimestamp}</span>
          </h4>
          <IonLabel className="ticket-status">
            <div className="status-text">
              <h3 className="ticket-number"><IonIcon icon={ellipse}/>{number}</h3>
              <StatusIndicator status={status} />
              <h3 className="agent-name"><IonIcon icon={ellipse}/><IonIcon icon={headsetOutline}/>{agentName}</h3>
            </div>
          </IonLabel>
        </IonLabel>
      </IonItem>
      
      <IonItemOptions className="option-start" side="start">
        <IonItemOption className="option-archive">
          <IonIcon slot="top" size="large" icon={archive}/>
          Archive
        </IonItemOption>
      </IonItemOptions>
      
      <IonItemOptions className="option-end" side="end">
        <IonItemOption className="option-avatar">
          <IonAvatar slot="end" className="avatar-agent">
            <img alt={imageAlt} src={avatarUrl} />
          </IonAvatar>
        </IonItemOption>
        <IonItemOption className="option-delete">
          <IonIcon slot="top" size="large" icon={trash}/>
          Delete
        </IonItemOption>
      </IonItemOptions>
      
    </IonItemSliding>
  );
}

export default TicketCard;


