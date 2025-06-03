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
import '../../../theme/variables.css';
import StatusIndicator from '../status-indicator/status-indicator';
import { useMessageStore } from '../../../stores/message-store/message-store';
import { TicketsProduct } from '../../../models/ticket-store/ticket-model-product';
import { getCurrentTime } from '../../../services/time-service/time-service';

const TicketCard: React.FC<TicketsProduct> = ({
  id,
  title,
  number,
  avatarUrl,
  status,
  date,
  agentName,
  icon,
  messages,
  onArchive,
  isArchived,
  onDelete,
}) => {
  const { t } = useTranslation('ticket');
  
  const [displayedTimestamp] = useState(getCurrentTime());
  const [localIsArchived, setIsArchived] = useState(isArchived);
  const [isVisible, setIsVisible] = useState(true);
  const activeChatId = useMessageStore(state => state.activeChatId);
  const [currentStatus, setCurrentStatus] = useState(status);

  const history = useHistory();
  const itemSlidingRef = useRef<HTMLIonItemSlidingElement>(null);

  const resetUnreadMessages = useMessageStore(state => state.resetUnreadMessages);

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

  const handleDeleteClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onDelete) {
        onDelete(id);
      }
      setIsVisible(true);
      // Aquí podrías emitir un evento o llamar a una prop para que el padre actualice la lista
    }, 120);
  };

  

  useEffect(() => {
    setIsArchived(isArchived);
  }, [isArchived]);

  useEffect(() => {
    setIsArchived(isArchived);
  }, [id]);

  useEffect(() => {
    if (messages.length > 0) {
      setCurrentStatus('En Proceso'); 
    }
  }, [messages]);

  const unreadCount = useMessageStore(state => state.countUnreadMessages(id));

  return (
    <IonItemSliding ref={itemSlidingRef} className={`ticket-card ${!isVisible ? 'fade-out' : 'fade-in'}`}>
      <IonItem detail={false} className="ticket-card" onClick={handleCardClick} id="ticketCard">
        <div className="app-select-card">
          <IonIcon size="small" icon={icon} />
        </div>
        {unreadCount > 0 && activeChatId !== id && (
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
          setIsVisible(false);
          setTimeout(() => {
            if (onArchive) {
              onArchive(id);
            }
            setIsVisible(true);
          }, 120);
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
        <IonItemOption className="option-delete" onClick={() => {
          handleDeleteClick();
          itemSlidingRef.current?.close();
        }}>
          <IonIcon slot="top" size="large" icon={trash}/>
          {t('delete')}
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
}

export default TicketCard;


