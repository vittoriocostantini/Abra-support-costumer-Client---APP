   // src/hooks/useInterval.ts
   import { useEffect } from 'react';
   import { loadMessages } from '../../../hooks/chat/storage-load-messages/storage-load-messages';

   const useInterval = (setUpdatedTickets: React.Dispatch<React.SetStateAction<any[]>>, tickets: any[]) => {
     useEffect(() => {
       const interval = setInterval(() => {
         setUpdatedTickets(prevTickets => 
           prevTickets.map(ticket => ({
             ...ticket,
             messages: loadMessages(ticket.id)
           }))
         );
       }, 3000);

       return () => clearInterval(interval);
     }, [setUpdatedTickets, tickets]);
   };

   export default useInterval;