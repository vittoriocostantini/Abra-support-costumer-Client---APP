import React from 'react';
import { IonFooter, IonToolbar, IonRouterLink, IonButton, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { addCircle, person, settings } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import '../../theme/page-themes/ticket-page.css';

const buttons = [
  {
    to: '/tabs/submit-case',
    icon: addCircle,
    labelKey: 'case',
    className: 'button-case-ticket',
  },
  {
    to: '/tabs/contact',
    icon: person,
    labelKey: 'contact',
    className: 'button-contact-ticket',
  },
  {
    to: '/tabs/settings',
    icon: settings,
    labelKey: 'settings',
    className: 'button-settings-ticket',
  },
];

const FooterTickets: React.FC = () => {
  const { t } = useTranslation('footer');
  return (
    <IonFooter className="footer-tickets" class="ion-no-border">
      <IonToolbar>
        <div className="footer-tickets-container">
          {buttons.map(({ to, icon, labelKey, className }) => (
            <IonRouterLink key={to} routerDirection="none" routerLink={to}>
              <IonButton size="small" fill="clear" className={className}>
                <IonTabButton>
                  <IonIcon icon={icon} size="medium" />
                  <IonLabel>{t(labelKey)}</IonLabel>
                </IonTabButton>
              </IonButton>
            </IonRouterLink>
          ))}
        </div>
      </IonToolbar>
    </IonFooter>
  );
};

export default FooterTickets; 