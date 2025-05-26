import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonButtons, IonBackButton, IonList, IonCheckbox, IonIcon, IonLoading, useIonViewDidEnter } from '@ionic/react';
import { language } from 'ionicons/icons';
import './languaje.css';
import { LanguajeProps, languageOptions, getCurrentLanguage, saveLanguage } from '../../../../models/lang-options/language-model';
import { useTranslation } from 'react-i18next';

const Languaje: React.FC<LanguajeProps> = ({ initialLanguage = getCurrentLanguage() }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(initialLanguage);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { t } = useTranslation('language');

  // Función para manejar el cambio de idioma
  const handleLanguageChange = async (language: string) => {
    setIsLoading(true);
    try {
      setSelectedLanguage(language);
      await saveLanguage(language);
    } catch (error) {
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };


  return (
    <IonPage>

      <IonHeader class='ion-no-border'>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/settings" text={t('settings')} />
          </IonButtons>
          <IonTitle>{t('language')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='content-languaje'> 
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>{t('language')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem className='letter-languaje'>
          <IonLabel>
            <IonIcon icon={language} size='large' />
            <p>{t('changeLanguage')}</p>
            <p>{t('languageNote')}</p>
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
        <IonLoading
          isOpen={isLoading}
          message={t('changingLanguage')}
          duration={0}
          spinner="circular"
          cssClass="custom-loading"
        />
      </IonContent>
    </IonPage>
  );
};

export default Languaje;