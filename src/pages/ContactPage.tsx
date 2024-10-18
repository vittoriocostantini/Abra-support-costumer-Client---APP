import React, { useState } from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage } from '@ionic/react'; // Añadir IonIcon
import '../theme/TabsApp/ContactPage.css';
import AgentHistory from '../components/AgentHistory';

const ContactPage: React.FC = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false); // Nuevo estado

  return (
    <IonPage>
      <IonHeader className='header-home'>
        <IonToolbar className='toolbar-home'>
          {!isSearchBarVisible && ( // Mostrar IonTitle solo si la barra de búsqueda no está visible
            <IonTitle className='title-contact'>Contacta a un agente</IonTitle>
          )}
          <AgentHistory onToggleSearchBar={setIsSearchBarVisible} /> {/* Pasar la función de callback */}
        </IonToolbar>
      </IonHeader>
      <IonContent>
      </IonContent>
    </IonPage>
  );
};

export default ContactPage;