import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './TicketCard.css'; // Importa el archivo CSS

// Importa el componente de avatar y el icono de persona
import { IonAvatar } from '@ionic/react';
import { IonIcon } from '@ionic/react';
// Importa la función para obtener la fecha
import { star } from 'ionicons/icons'; // Importa el nuevo icono sin outline

interface TicketCardProps {
  title: string;
  client: string;
  imageUrl: string;
  status: string;
}

function TicketCard({ title, client, imageUrl, status }: TicketCardProps) {
  const currentDate = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' });

  let statusClass = '';

  if (status === 'Resuelto') {
    statusClass = 'resolved';
  } else if (status === 'En Proceso') {
    statusClass = 'in-process';
  }

  return (
    <IonCard className="wide-card">
      <IonCardHeader>
        <div className="header-content">
          <div className="avatar-title">
            <IonAvatar>
              <img src={imageUrl} alt="Perfil de Asistencia" className="avatar-icon" />
            </IonAvatar>
            <div className="title-subtitle">
              <IonCardTitle className="title-subtitle">{title}</IonCardTitle>
              <IonCardSubtitle>
                Cliente: {client}
                <IonIcon icon={star} className="badge-icon" />
              </IonCardSubtitle>
            </div>
          </div>
          <div>
            <IonCardSubtitle className='card_date'><b>{currentDate}</b></IonCardSubtitle>
            <div className={`status-box ${statusClass}`}>
              {status === 'Resuelto' && 'Resuelto'}
              {status === 'En Proceso' && 'En Proceso'}
              {status === 'Sin estado' && 'Sin estado'}
            </div>
          </div>
        </div>
      </IonCardHeader>

      <IonCardContent className="content-text">
        Este es un ticket de atención al cliente. Por favor, revise los detalles a continuación.
        <br />
        Si tiene alguna pregunta, no dude en contactarnos.
      </IonCardContent>
    </IonCard>
  );
}

export default TicketCard;