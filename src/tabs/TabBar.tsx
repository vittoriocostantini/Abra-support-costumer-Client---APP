import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { ticketOutline, peopleOutline, personOutline, settingsOutline } from 'ionicons/icons';
import { useLocation } from 'react-router-dom';
import AppRoutes from '../routes/AppRoutes';
import { useState, useEffect } from 'react';

// Componente funcional de React para la barra de pestañas
const TabBar: React.FC = () => {
  // Hook para obtener la ubicación actual de la ruta
  const location = useLocation();

  // Determina si la barra de pestañas debe estar oculta en la ruta específica
  const [showTabBar, setShowTabBar] = useState(true);

  useEffect(() => {
    const tabBarApp = document.getElementById('tabBarApp');
        
    // Oculta la barra de pestañas si la ruta es '/tab3'
    if (location.pathname === '/Tickets/chat') {
      if (tabBarApp) {
        document.getElementById('tabBarApp')!.style.display = 'none';
      }
    } else {
      // Muestra la barra de pestañas después de un retraso de 300ms
      const timer = setTimeout(() => {
        if (tabBarApp) {
          document.getElementById('tabBarApp')!.style.display = 'flex';
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);
  return (
    // Contenedor para las rutas de la aplicación
    <IonRouterOutlet>
      <IonTabs>
        <IonRouterOutlet>
          {/* Componente que maneja las rutas de la aplicación */}
          <AppRoutes />
        </IonRouterOutlet>
        {/* Renderiza la barra de pestañas solo si no está oculta */}
        {showTabBar && (
          <IonTabBar slot="bottom" className="fade-in" id="tabBarApp">
            {/* Botón de pestaña para la sección de Tickets */}
            <IonTabButton tab="tickets" href="/pages/Tickets">
              <IonIcon icon={ticketOutline} />
              <IonLabel>Tickets</IonLabel>
            </IonTabButton>
            {/* Botón de pestaña para la sección de Contactos */}
            <IonTabButton tab="contact" href="/pages/Contact">
              <IonIcon icon={peopleOutline} />
              <IonLabel>Contacts</IonLabel>
            </IonTabButton>
            {/* Botón de pestaña para la sección de Cuenta */}
            <IonTabButton tab="search" href="/pages/SearchPage">
              <IonIcon icon={personOutline} />
              <IonLabel>Account</IonLabel>
            </IonTabButton>
            {/* Botón de pestaña para la sección de Configuración */}
            <IonTabButton tab="settings" href="/pages/SettingsPage">
              <IonIcon icon={settingsOutline} />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        )}
      </IonTabs>
    </IonRouterOutlet>
  );
};

// Exporta el componente TabBar para su uso en otras partes de la aplicación
export default TabBar;
