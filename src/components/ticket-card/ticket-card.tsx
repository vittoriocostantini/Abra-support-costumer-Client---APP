import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonAvatar,
  IonLabel,
  IonItem,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonBadge
} from '@ionic/react';
import { trash, archive, ellipse, headsetOutline, reader } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import './ticket-card.css';
import '../../theme/variables.css';
import StatusIndicator from '../status-indicator/status-indicator';
import { countUnreadMessages } from '../../functions/messages/message-notification/message-count';
import { TicketsProduct } from '../../models/ticket-store/ticket-model-product';
import { resetUnreadMessages } from '../../functions/messages/reset-service-messages/reset-unread-messages';
import { getCurrentTime } from '../../services/time-service/time-service';
import { handleArchiveClick } from '../../handlers/archive-click-option/ticket-archive-click-handler';
import { checkIsInChat } from '../../functions/tickets/route-chat-check/route-check-chat';

const TicketCard: React.FC<TicketsProduct> = ({
  id,
  title,
  number,
  path,
  avatarUrl,
  status,
  date,
  agentName,
  icon,
  messages,
  onArchive,
  isArchived,
}) => {
  const { t } = useTranslation('ticket');
  
  const [displayedTimestamp] = useState(getCurrentTime());
  const [localIsArchived, setIsArchived] = useState(isArchived);
  const [isVisible, setIsVisible] = useState(true);
  const [isInChat, setIsInChat] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  const history = useHistory();
  const itemSlidingRef = useRef<HTMLIonItemSlidingElement>(null);

  const handleCardClick = () => {
    resetUnreadMessages(id);
    history.push({
      pathname: `/tickets/chat/${id}`,
      state: { 
        agentName: agentName || 'Agente', 
        avatarUrl: avatarUrl || 'https://ionicframework.com/docs/img/demos/avatar.svg'
      }
    });
  };

  const handleArchiveClickWrapper = () => {
    setIsVisible(false);
    setTimeout(() => {
      handleArchiveClick(id, localIsArchived, onArchive, setIsArchived);
      setIsVisible(true);
    }, 120);
  };

  useEffect(() => {
    setIsArchived(isArchived);
  }, [isArchived]);

  useEffect(() => {
    setIsArchived(isArchived);
  }, [id]);

  useEffect(() => {
    const currentPath = history.location.pathname;
    const expectedPath = `${path}${id}`;
    
    if (currentPath.includes('/tickets')) {
      const isInChat = checkIsInChat(currentPath, path, id);
      setIsInChat(isInChat);
      console.log(`isInChat: ${isInChat}, currentPath: ${currentPath}, expectedPath: ${expectedPath}`);
    } else {
      setIsInChat(false);
    }
  }, [history.location.pathname, path, id]);

  useEffect(() => {
    if (messages.length > 0) {
      setCurrentStatus('En Proceso'); 
    }
  }, [messages]);

  const unreadCount = countUnreadMessages(messages, id, isInChat);

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
              <StatusIndicator status={currentStatus} />
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
          {localIsArchived ? t('unarchive') : t('archive')}
        </IonItemOption>
      </IonItemOptions>
      <IonItemOptions className="option-end" side="end">
        <IonItemOption className="option-avatar" onClick={() => itemSlidingRef.current?.close()}>
          <IonAvatar slot="end" className="avatar-agent">
            <img alt={t('agentAvatar')} src={avatarUrl} />
          </IonAvatar>
        </IonItemOption>
        <IonItemOption className="option-delete" onClick={() => itemSlidingRef.current?.close()}>
          <IonIcon slot="top" size="large" icon={trash}/>
          {t('delete')}
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
}

export default TicketCard;


