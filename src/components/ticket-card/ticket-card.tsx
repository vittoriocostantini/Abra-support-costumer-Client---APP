// Importaciones de librerías externas
import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
import { trash, archive, ellipse, headsetOutline, reader } from 'ionicons/icons';

// Importaciones de archivos internos
import './ticket-card.css';
import '../../theme/variables.css';
import StatusIndicator from '../status-indicator/status-indicator';
import { countUnreadMessages } from '../../hooks/chat/message-notification/message-count';
import { TicketsProduct } from './models/ticket-model';
import { resetUnreadMessages } from '../../hooks/chat/reset-service-messages/reset-unread-messages';
import { getCurrentTime } from '../../services/time-service/time-service';
import { handleArchiveClick } from '../../hooks/tickets/archive-option/archive-click-handler';
import { checkIsInChat } from '../../hooks/chat/route-chat-check/route-check-chat';

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
  onArchive,
  isArchived,
}) => {
  // Estados
  const [displayedTimestamp] = useState(getCurrentTime());
  const [localIsArchived, setIsArchived] = useState(isArchived);
  const [isVisible, setIsVisible] = useState(true);
  const [isInChat, setIsInChat] = useState(false);

  // Referencias
  const history = useHistory();
  const itemSlidingRef = useRef<HTMLIonItemSlidingElement>(null);

  // Funciones
  const handleCardClick = () => {
    resetUnreadMessages(id);
    history.push({
      pathname: `${path}${id}`,
      state: { agentName, avatarUrl }
    });
  };

  const handleArchiveClickWrapper = () => {
    setIsVisible(false);
    setTimeout(() => {
      handleArchiveClick(id, localIsArchived, onArchive, setIsArchived);
      setIsVisible(true);
    }, 120);
  };

  // Efectos
  useEffect(() => {
    setIsArchived(isArchived);
  }, [isArchived]);

  useEffect(() => {
    setIsArchived(isArchived);
  }, [id]);

  useEffect(() => {
    const isInChat = checkIsInChat(history.location.pathname, path, id);
    console.log(`isInChat: ${isInChat}, currentPath: ${history.location.pathname}, expectedPath: ${path}${id}`);
  }, [history.location.pathname, path, id]);

  // Contar los mensajes no leídos para este ticket
  const unreadCount = countUnreadMessages(messages, id, isInChat);

  // Renderizado
  return (
    <IonItemSliding ref={itemSlidingRef} className={`ticket-card ${!isVisible ? 'fade-out' : 'fade-in'}`}>
      <IonItem detail={false} className="ticket-card" onClick={handleCardClick} id="ticketCard">
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
          <h1 className="ticket-title" style={{ fontWeight: 'bold' }}>{title}</h1>
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
        <IonItemOption className="option-archive" onClick={() => {
          handleArchiveClickWrapper();
          itemSlidingRef.current?.close();
        }}>
          <IonIcon slot="top" size="large" icon={localIsArchived ? reader : archive} />
          {localIsArchived ? 'Desarchivar' : 'Archivar'}
        </IonItemOption>
      </IonItemOptions>
      <IonItemOptions className="option-end" side="end">
        <IonItemOption className="option-avatar" onClick={() => itemSlidingRef.current?.close()}>
          <IonAvatar slot="end" className="avatar-agent">
            <img alt={imageAlt} src={avatarUrl} />
          </IonAvatar>
        </IonItemOption>
        <IonItemOption className="option-delete" onClick={() => itemSlidingRef.current?.close()}>
          <IonIcon slot="top" size="large" icon={trash}/>
          Eliminar
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
}

export default TicketCard;


