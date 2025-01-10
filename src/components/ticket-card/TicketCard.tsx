import React from 'react';
import { IonAvatar,
  IonChip,
  IonLabel } from '@ionic/react';
import './TicketCard.css';
import { useHistory } from 'react-router-dom';
import '../../theme/variables.css';




// Define the type for the props
interface TicketsProduct {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  path: string;
  avatarUrl: string;
  imageAlt: string;
}

const TicketCard: React.FC<TicketsProduct> = ({ id, title, subtitle, description, path, avatarUrl, imageAlt }) => {
  const history = useHistory();


  const handleCardClick = () => {
    history.push(`${path}${id}`);
  };

  return (
    <div className="ticket-card" onClick={handleCardClick} id="ticketCard">
    <div className="ticket-card-header">
      <IonAvatar>
        <img alt={imageAlt} src={avatarUrl} />
      </IonAvatar>
      <div>
        <h2 className="ticket-card-title">{title}</h2>
        <h3 className="ticket-card-subtitle">{subtitle}</h3>
      </div>
    </div>
    <div className="ticket-card-content">
      {description}
    </div>
  </div>
  );
}

export default TicketCard;
