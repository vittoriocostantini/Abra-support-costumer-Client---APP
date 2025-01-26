import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonToggle, IonButtons, IonBackButton, IonList, IonCheckbox, IonIcon } from '@ionic/react';
import { hideTabBar } from '../../../../services/tabs/tab-bar-view/tabbar-view';
import { language } from 'ionicons/icons';
import './languaje.css';

// Definición de la interfaz para las propiedades del componente
interface LanguajeProps {
  initialLanguage?: string; // Idioma inicial opcional
}

// Definición de la interfaz para los elementos de idioma
interface LanguageOption {
  code: string; // Código del idioma (ej. 'es', 'en', 'fr')
  label: string; // Nombre del idioma (ej. 'Español', 'Inglés', 'Francés')
}

// Lista de opciones de idioma
const languageOptions: LanguageOption[] = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'Inglés' },
  { code: 'fr', label: 'Francés' },
  { code: 'pt', label: 'Portugués' },
  { code: 'it', label: 'Italiano' },
  { code: 'de', label: 'Alemán' },
  { code: 'ja', label: 'Japonés' },
  { code: 'zh', label: 'Chino' },
  { code: 'ar', label: 'Árabe' },
  { code: 'hi', label: 'Hindi' },
  { code: 'ru', label: 'Ruso' },
  { code: 'tr', label: 'Turco' },
  { code: 'nl', label: 'Holandés' },
  { code: 'sv', label: 'Sueco' },
  { code: 'no', label: 'Noruego' },
  { code: 'da', label: 'Danés' },
  { code: 'fi', label: 'Finlandés' },
  { code: 'el', label: 'Griego' },
  { code: 'hu', label: 'Húngaro' },
  { code: 'pl', label: 'Polaco' },
  { code: 'cs', label: 'Checo' },
  { code: 'ro', label: 'Rumano' },
  { code: 'sk', label: 'Eslovaco' },
  { code: 'sl', label: 'Esloveno' },
  { code: 'bg', label: 'Búlgaro' },
  { code: 'lv', label: 'Letón' },
  { code: 'lt', label: 'Lituano' },
  { code: 'et', label: 'Estonio' },
  { code: 'vi', label: 'Vietnamita' },
  { code: 'th', label: 'Tailandés' },
  { code: 'ms', label: 'Malayo' },
  { code: 'id', label: 'Indonesio' },
  { code: 'tl', label: 'Tagalo' },
  { code: 'sw', label: 'Suajili' },
  { code: 'bn', label: 'Bengalí' },
  { code: 'pa', label: 'Panjabi' },
  { code: 'ta', label: 'Tamil' },
  { code: 'te', label: 'Telugu' },
  { code: 'ml', label: 'Malayalam' },
  { code: 'mr', label: 'Marathi' },
  { code: 'gu', label: 'Gujarati' },
  { code: 'kn', label: 'Canarés' },
  { code: 'si', label: 'Cingalés' },
  { code: 'km', label: 'Jemer' },
  { code: 'la', label: 'Latín' },
  { code: 'hy', label: 'Armenio' },
  { code: 'is', label: 'Islandés' },
  { code: 'cy', label: 'Galés' },
  { code: 'sq', label: 'Albanés' },
  { code: 'mk', label: 'Macedonio' },
  { code: 'sr', label: 'Serbio' },
  { code: 'hr', label: 'Croata' },
  { code: 'bs', label: 'Bosnio' },
  { code: 'tl', label: 'Tagalo' },
  { code: 'jw', label: 'Javanés' },
  { code: 'su', label: 'Sundanés' },
  { code: 'xh', label: 'Xhosa' },
  { code: 'zu', label: 'Zulú' },
  // Añadir más idiomas según sea necesario
];

const Languaje: React.FC<LanguajeProps> = ({ initialLanguage = '' }) => { // Uso de la interfaz
  const [selectedLanguage, setSelectedLanguage] = useState<string>(initialLanguage); // Estado para el idioma seleccionado

  // Función para manejar el cambio de idioma
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  hideTabBar();
  return (
    <IonPage>
      <IonHeader translucent  >
        <IonToolbar>
          <IonButtons slot="start"  >
            <IonBackButton defaultHref="/settings" text="" />
          </IonButtons>
          <IonTitle>Idioma</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen> 
        <IonHeader collapse='condense' >
          <IonToolbar >
            <IonTitle size='large'>Idioma</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem className='letter-languaje'>
          <IonLabel> <IonIcon icon={language} size='large' /><p>Cambia el idioma de la aplicación</p>
          <p>Solo cambia el idioma de la aplicación, no se cambiará el 
            idioma de atencion al cliente o el idioma en que se comunicaran los agentes</p></IonLabel>
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