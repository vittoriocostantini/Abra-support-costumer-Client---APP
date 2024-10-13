import React, { useRef, useState } from 'react';
import { 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonAvatar, 
  IonIcon, 
  IonModal, 
  IonNav, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonButton, 
  IonContent 
} from '@ionic/react';
import { star, chevronDownOutline } from 'ionicons/icons';
import '../theme/TicketCard.css';
import ChatPage from '../pages/ChatPage';
import { createAnimation } from '@ionic/react';

// Animación de entrada para el IonModal
const enterAnimation = (baseEl: HTMLElement) => {
  const root = baseEl.shadowRoot || baseEl;
  const wrapperAnimation = createAnimation()
    .addElement(root.querySelector('.modal-wrapper')!)
    .keyframes([
      { offset: 0, transform: 'translateX(100%)' },
      { offset: 1, transform: 'translateX(0)' }
    ]);

  return createAnimation()
    .addElement(baseEl)
    .easing('ease-out')
    .duration(300)
    .addAnimation(wrapperAnimation);
};

// Animación de salida para el IonModal
const leaveAnimation = (baseEl: HTMLElement) => {
  const root = baseEl.shadowRoot || baseEl;
  const wrapperAnimation = createAnimation()
    .addElement(root.querySelector('.modal-wrapper')!)
    .keyframes([
      { offset: 0, transform: 'translateX(0)' },
      { offset: 1, transform: 'translateX(100%)' }
    ]);

  return createAnimation()
    .addElement(baseEl)
    .easing('ease-in')
    .duration(300)
    .addAnimation(wrapperAnimation);
};

// Componente funcional TicketCard
function TicketCard({ id, title, client, imageUrl, status, onClick }: { id?: string; title: string; client: string; imageUrl: string; status: string; onClick: () => void; }) {
  const nav = useRef<HTMLIonNavElement>(null); // Referencia para el componente IonNav
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la apertura del modal

  // Maneja el clic en la tarjeta
  const handleCardClick = () => {
    setIsModalOpen(true); // Abre el modal
    onClick(); // Llama a la función onClick pasada como prop
  };

  // Cierra el modal
  const closeModal = () => setIsModalOpen(false);

  // Se ejecuta cuando el modal se presenta
  const didPresent = () => {
    nav.current?.setRoot(ChatPage, { nav: nav.current }); // Establece la raíz del IonNav al componente ChatPage
  };

  // Formatea la fecha actual
  const formattedDate = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' });
  // Determina la clase CSS basada en el estado del ticket
  const statusClass = status === 'Resuelto' ? 'resolved' : status === 'En Proceso' ? 'in-process' : '';

  return (
    <div id={id} style={{ cursor: 'pointer' }}>
      <IonCard className="wide-card clickable-card" onClick={handleCardClick}>
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
              <IonCardSubtitle className='card_date'><b>{formattedDate}</b></IonCardSubtitle>
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

      <IonModal 
        className='ion-modal-ticket ion-modal-ticketcard'
        isOpen={isModalOpen} 
        onWillPresent={didPresent} // Cambiar de onDidPresent a onWillPresent
        onDidDismiss={closeModal} 
        enterAnimation={enterAnimation}
        leaveAnimation={leaveAnimation}
      >
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={closeModal}>
                <IonIcon 
                icon={chevronDownOutline} 
                className='icon-back'
                />
              </IonButton>
            </IonButtons>
            <IonTitle>Chat</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonNav ref={nav} />
        </IonContent>
      </IonModal>
    </div>
  );
}

export default TicketCard;
