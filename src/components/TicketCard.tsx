import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAvatar, IonIcon } from '@ionic/react';
import '../theme/TicketCard.css'; // Importa el archivo CSS

// Importa el componente de avatar y el icono de persona
import { star } from 'ionicons/icons'; // Importa el nuevo icono sin outline

interface TicketCardProps {
  title: string;
  client: string;
  imageUrl: string;
  status: string;
  onClick: () => void; // Añadido onClick prop
}

function TicketCard({ title, client, imageUrl, status, onClick }: TicketCardProps) {
  const currentDate = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' });

  const statusClass = status === 'Resuelto' ? 'resolved' : status === 'En Proceso' ? 'in-process' : '';

  return (
    <div onClick={onClick}> {/* Usa el onClick prop */}
      <IonCard className="wide-card clickable-card"> {/* Añadido clickable-card */}
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
                {status}
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
    </div>
  );
}

export default TicketCard;