// Importaciones de React y componentes de Ionic
import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonToolbar, IonPage, IonTitle, IonButtons, IonMenuButton, IonList } from '@ionic/react';
import '../../theme/page-themes/ticket-page.css';
import FilterOption from '../../components/filter-option/filter-option';
import TicketCard from '../../components/ticket-card/ticket-card';
import { showTabBar } from '../../services/tabs/tab-bar-view/tabbar-view';
import { useIonViewDidEnter } from '@ionic/react';
import { tickets } from '../../tickets-store/tickets-store';
import { loadMessages } from '../../hooks/chat/utils/chat-utils';

// Componente principal de la página de tickets
const TicketsPage: React.FC = () => {
  // Estado para el título enviado y los tickets actualizados
  const [submittedTitle, setSubmittedTitle] = useState('');
  const [updatedTickets, setUpdatedTickets] = useState(tickets);

  // Efecto que se ejecuta cuando la vista se ha cargado
  useIonViewDidEnter(() => {
    showTabBar();
    setUpdatedTickets(tickets);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Actualizar los tickets con los mensajes más recientes
      setUpdatedTickets(prevTickets => 
        prevTickets.map(ticket => ({
          ...ticket,
          messages: loadMessages(ticket.id) // Cargar mensajes actualizados
        }))
      );
    }, 3000); // Verificar cada 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

  // Renderizado del componente
  return (
    <IonPage>
      <IonHeader className='header-tickets' translucent >
        <IonToolbar className='toolbar-tickets'>
          <FilterOption />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='content-tickets'>
        <IonList>
          {updatedTickets.map((ticket, index) => {
            return (
              <TicketCard
                key={index}
                id={ticket.id}
                title={submittedTitle || ticket.title}
                number={ticket.number || ''}
                path={ticket.path || ''}
                avatarUrl={ticket.avatarUrl || ''}
                imageAlt={ticket.imageAlt || ''}
                status={ticket.status || ''}
                date={ticket.date || ''}
                agentName={ticket.agentName || ''}
                icon={ticket.icon}
                messages={loadMessages(ticket.id)}
              />
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
}

// Exportación del componente
export default TicketsPage;

/* tickets-page.tsx */