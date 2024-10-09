import React, { useState } from 'react';
import { IonButtons, IonButton, IonIcon, IonModal, IonContent, IonHeader, IonToolbar, IonTitle, IonInput } from '@ionic/react';
import { searchOutline, addOutline } from 'ionicons/icons';
import '../theme/AddForm.css';

const IconButtons: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <IonButtons slot="end">
        <IonButton>
          <IonIcon icon={searchOutline}></IonIcon>
        </IonButton>
        <IonButton onClick={() => setShowModal(true)}>
          <IonIcon icon={addOutline}></IonIcon>
        </IonButton>
      </IonButtons>

      <IonModal 
      isOpen={showModal} 
      onDidDismiss={() => setShowModal(false)}
      className='modal-add'
      initialBreakpoint={1} 
      breakpoints={[0, 1]}
      >
        <IonHeader>
          <IonToolbar>
            <IonTitle>Historial de Agentes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div>
            <h1>Aqui va el historial del ultimo agente que te ayudo
              podras a;adirlo o revisar el chat de este
            </h1>
          </div>
        </IonContent>
      </IonModal>
    </>
  );
};

export default IconButtons;