import TicketCard from '../../stateless/ticketcard/TicketCard';
import { useIonRouter } from '@ionic/react';

function TicketList() {
  const router = useIonRouter(); // Definir el router aquí

  const tickets = [
    {
      title: 'Instagram Bloqueado',
      client: 'Juan Pérez',
      imageUrl: 'src/Assets/AssistancesProfile/Assistance1.jpg',
      status: 'En Proceso',
      onClick: () => {
      }
    },
    {
      title: 'Problema con el correo',
      client: 'María López',
      imageUrl: 'src/Assets/AssistancesProfile/Assistance2.jpg',
      status: 'Resuelto',
      onClick: () => {
      }
    }
  ];


  return (
    <div>
      {tickets.map((ticket) => (
      
        <TicketCard
        />
      ))}
    </div>
  );
}

export default TicketList;
