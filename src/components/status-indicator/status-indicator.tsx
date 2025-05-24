import React from 'react';
import { IonIcon } from '@ionic/react';
import { ellipse } from 'ionicons/icons';
import './status-indicator.css';
import { useTranslation } from 'react-i18next';

interface StatusIndicatorProps {
  status: string;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  const { t } = useTranslation('status');
  let colorClass = '';
  let statusKey = '';

  switch (status) {
    case 'Pendiente':
      colorClass = 'status-yellow';
      statusKey = 'status.pending';
      break;
    case 'En Proceso':
      colorClass = 'status-blue';
      statusKey = 'status.inProgress';
      break;
    case 'Completado':
      colorClass = 'status-green';
      statusKey = 'status.completed';
      break;
    default:
      colorClass = '';
      statusKey = status;
  }

  return (
    <h2 className="status-text">
      <IonIcon className={`status-icon ${colorClass}`} icon={ellipse} />
      {t(statusKey)}
    </h2>
  );
};

export default StatusIndicator; 

