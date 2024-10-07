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
    },
    // Añade más tickets según sea necesario
  ];

  return (
    <div>
      {tickets.map((ticket, index) => (
        <TicketCard
          key={index}
          title={ticket.title}
          client={ticket.client}
          imageUrl={ticket.imageUrl}
          status={ticket.status}
        />
      ))}
    </div>
  );
}

export default TicketList;
