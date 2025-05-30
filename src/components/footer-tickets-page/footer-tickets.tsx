import React from 'react';
import { IonFooter, IonToolbar, IonRouterLink, IonButton, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { addCircle, person, settings, ticket } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import './footer-tickets.css';

const buttons = [
  {
    to: '/tabs/submit-case',
    icon: addCircle,
    labelKey: 'case',
    className: 'footer-button-case',
  },
  {
    to: '/tabs/agents',
    icon: person,
    labelKey: 'agents',
    className: 'footer-button-contact',
  }, 
  {
    to: '/view/tickets/',
    icon: ticket,
    labelKey: 'tickets',
    className: 'footer-button-tickets',
  },
  {
    to: '/settings',
    icon: settings,
    labelKey: 'settings',
    className: 'footer-button-settings',
  },
 
];

const FooterTickets: React.FC = () => {
  const { t } = useTranslation('footer');
  const location = useLocation();
  return (
  
        <div className="footer-tickets-container" slot='bottom'>
          {buttons.map(({ to, icon, labelKey, className }) => {
            const isActive = location.pathname === to || (to === '/view/tickets/' && location.pathname.startsWith('/view/tickets'));
            return (
              <IonRouterLink key={to} routerDirection="none" routerLink={to}>
                <IonButton fill="clear" className={`${className}${isActive ? ' active' : ''}`}>
                    <IonIcon icon={icon}  />
                    <IonLabel >{t(labelKey)}</IonLabel>
                </IonButton>
              </IonRouterLink>
            );
          })}
        </div>
 
  );
};

export default FooterTickets; 