import React from 'react';
import { IonIcon } from '@ionic/react';
import { ellipse } from 'ionicons/icons';
import './status-indicator.css';

interface StatusIndicatorProps {
  status: string;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  let colorClass = '';

  switch (status) {
    case 'Pendiente':
      colorClass = 'status-yellow';
      break;
    case 'En Proceso':
      colorClass = 'status-blue';
      break;
    case 'Completado':
      colorClass = 'status-green';
      break;
    default:
      colorClass = '';
  }

  return (
    <h2 className="status-text">
      <IonIcon className={`status-icon ${colorClass}`} icon={ellipse} />
      {status}
    </h2>
  );
};

export default StatusIndicator; 

//