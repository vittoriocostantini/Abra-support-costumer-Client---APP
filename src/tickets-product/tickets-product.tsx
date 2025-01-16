import React from 'react';
import TicketCard from '../components/ticket-card/ticket-card';

const TicketsProduct: React.FC = () => {
  // Define an array of ticket data
  const tickets = [
    {
      id: '1',
      title: 'Correo Electronico',
      subtitle: 'cuenta de correo',
      description: 'Porfavor, necesito ayuda con mi cuenta de correo electrónico, mi correo no acepta el codigo de verificacion.',
      path: '/Tickets/chat/',
      avatarUrl: 'src/assets/agents/agent1.png',
      imageAlt: 'Avatar',
    },
    {
      id: '2',
      title: 'Pago de Steam',
      subtitle: 'cuenta de steam',
      path: '/Tickets/chat/',
      description: 'Necesito ayuda con mi cuenta de steam, tengo problemas con el pago. la tarjeta de credito no se acepta. no puedo registrar mas tarjetas.',
      avatarUrl: 'src/assets/agents/agent2.png',
      imageAlt: 'Avatar',
    },
    {
      id: '3',
      title: 'Pago de Paypal',
      subtitle: 'cuenta de paypal',
      description: 'Necesito ayuda con mi cuenta de paypal, tengo problemas con el pago . hace 2 dias que no puedo pagar. el pago no se refleja en mi cuenta.',
      path: '/Tickets/chat/',
      avatarUrl: 'src/assets/agents/agent3.png',
      imageAlt: 'Avatar',
    },
    {
      id: '4',
      title: 'Compra de Amazon',
      subtitle: 'compra de amazon',
      path: '/Tickets/chat/',
      description: 'Necesito ayuda con mi cuenta de amazon, tengo problemas con el pago. la tarjeta de credito no se acepta. no puedo registrar mas tarjetas.',
      avatarUrl: 'src/assets/agents/agent4.png',
      imageAlt: 'Avatar',
    },
    {
      id: '5',
      title: 'Registro de Fedex',
      subtitle: 'registro de fedex',
      path: '/Tickets/chat/',
      description: 'Necesito ayuda con mi cuenta de fedex, tengo problemas con el pago. la tarjeta de credito no se acepta. no puedo registrar mas tarjetas.',
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      imageAlt: 'Avatar',
    }
  ];

  return (
    <div>
      {tickets.map((ticket, index) => (
        <TicketCard
          key={index}
          id={ticket.id}
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
