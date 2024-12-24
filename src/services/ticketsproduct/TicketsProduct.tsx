import React from 'react';
import TicketCard from '../../components/stateless/ticketcard/TicketCard';

const TicketsProduct: React.FC = () => {
  // Define an array of ticket data
  const tickets = [
    {
      title: 'Ticket 1',
      subtitle: 'Subtítulo 1',
      description: 'Descripción del ticket 1',
      path: '/Tickets/chat',
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      imageAlt: 'Avatar',
    },
    {
      title: 'Ticket 2',
      subtitle: 'Subtítulo 2',
      description: 'Descripción del ticket 2',
    },
    {
      title: 'Ticket 3',
      subtitle: 'Subtítulo 3',
      description: 'Descripción del ticket 3 lorem ipsum dolor sit amet,consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <div>
      {tickets.map((ticket, index) => (
        <TicketCard
          key={index}
          title={ticket.title}
          subtitle={ticket.subtitle || ''}
          description={ticket.description || ''}
          path={ticket.path || ''}
          avatarUrl={ticket.avatarUrl || ''}
          imageAlt={ticket.imageAlt || ''}
    
        />
      ))}
    </div>
  );
}

export default TicketsProduct;
