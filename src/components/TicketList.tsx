import TicketCard from './TicketCard';

function TicketList() {
  const tickets = [
    {
      title: 'Instagram Bloqueado',
      client: 'Juan Pérez',
      imageUrl: 'src/Assets/AssistancesProfile/Assistance1.jpg',
      status: 'En Proceso'
    },
    {
      title: 'Problema con el correo',
      client: 'María López',
      imageUrl: 'src/Assets/AssistancesProfile/Assistance2.jpg',
      status: 'Resuelto'
    }
  ];

  return (
    <div>
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.title} // Usar el título como clave
          title={ticket.title}
          client={ticket.client}
          imageUrl={ticket.imageUrl}
          status={ticket.status}
          onClick={() => {}}
        />
      ))}
    </div>
  );
}

export default TicketList;
