import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonButtons, IonBackButton, IonList, IonCheckbox, IonIcon } from '@ionic/react';
import { hideTabBar } from '../../../../services/tabs/tab-bar-view/tabbar-view';
import { language } from 'ionicons/icons';
import './languaje.css';
import { LanguajeProps, languageOptions, getCurrentLanguage, saveLanguage } from '../../../../models/lang-options/language-model';

const Languaje: React.FC<LanguajeProps> = ({ initialLanguage = getCurrentLanguage() }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(initialLanguage);

  // Función para manejar el cambio de idioma
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    saveLanguage(language);
  };

  hideTabBar();
  return (
    <IonPage>
      <IonHeader class='ion-no-border'>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/settings" text="Ajustes" />
          </IonButtons>
          <IonTitle>Idioma</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='content-languaje'> 
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Idioma</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem className='letter-languaje'>
          <IonLabel>
            <IonIcon icon={language} size='large' />
            <p>Cambia el idioma de la aplicación</p>
            <p>Solo cambia el idioma de la aplicación, no se cambiará el 
              idioma de atencion al cliente o el idioma en que se comunicaran los agentes</p>
          </IonLabel>
        </IonItem>
        <IonList className='list-languaje'>
          {languageOptions.map((option) => (
            <IonItem key={option.code}>
              <IonLabel>{option.label}</IonLabel>
              <IonCheckbox 
                slot="end" 
                checked={selectedLanguage === option.code} 
                onIonChange={() => handleLanguageChange(option.code)} 
              />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Languaje;