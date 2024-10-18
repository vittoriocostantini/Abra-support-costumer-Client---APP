import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const TicketCard: React.FC = () => {
  const history = useHistory();

  const handleCardClick = () => {
    history.push('/Tickets/chat', { direction: 'forward' });
  };



  return (
    <IonCard onClick={handleCardClick}>
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Here's a small text description for the card content. Nothing more, nothing less.
      </IonCardContent>
    </IonCard>
  );
}

export default TicketCard;
