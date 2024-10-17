import TicketCard from './TicketCard';
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
        router.push('/ChatPage', 'forward'); // Usar el router definido
      }
    },
    {
      title: 'Problema con el correo',
      client: 'María López',
      imageUrl: 'src/Assets/AssistancesProfile/Assistance2.jpg',
      status: 'Resuelto',
      onClick: () => {
        router.push('/ChatPage', 'forward'); // Usar el router definido
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
