import React, { useState } from 'react';
import { IonButtons, IonButton, IonIcon, IonSearchbar, IonModal, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { searchOutline, addOutline } from 'ionicons/icons';
import '../theme/AgentHistory.css';

interface AgentHistoryProps {
  onToggleSearchBar: (isVisible: boolean) => void; // Nueva prop
}

const AgentHistory: React.FC<AgentHistoryProps> = ({ onToggleSearchBar }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchBarToggle = () => {
    const newVisibility = !showSearchBar;
    setShowSearchBar(newVisibility);
    onToggleSearchBar(newVisibility); // Llamar a la función de callback
  };

  return (
    <>
      <IonButtons slot="end">
        <IonButton onClick={handleSearchBarToggle}>
          <IonIcon icon={searchOutline}></IonIcon>
        </IonButton>
        <IonButton onClick={() => setShowModal(true)}>
          <IonIcon icon={addOutline}></IonIcon>
        </IonButton>
      </IonButtons>

      {showSearchBar && (
        <IonSearchbar placeholder="Buscar..." className="search-bar" />
      )}

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

export default AgentHistory;