import React, { useState } from 'react';
import './filter-option.css';
import { IonIcon, IonButton, IonActionSheet } from '@ionic/react';
import { ellipsisHorizontal } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';

interface FilterOptionProps {
    onFilterSelect: (estado: string | null) => void; // Permitir null para quitar el filtro
}

const FilterOption: React.FC<FilterOptionProps> = ({ onFilterSelect }) => {
    const { t } = useTranslation('filter');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelect = (estado: string | null) => {
        setSelectedOption(estado);
        onFilterSelect(estado);
    };

    return (
      <>
        <IonButton  
        shape="round"
        onClick={() => setIsOpen(true)} 
        className='filter-button'>
          <IonIcon className='icon-button' icon={ellipsisHorizontal} slot='icon-only' />
        </IonButton>
        <IonActionSheet
        className='filter-action-sheet'
          isOpen={isOpen}
          buttons={[
            {
              text: t('status.completed'),
              data: {
                action: 'completado',
              },
              handler: () => handleSelect('Completado'),
              cssClass: selectedOption === 'Completado' ? 'selected-option' : '',
            },
            {
              text: t('status.in_progress'),
              data: {
                action: 'en_proceso',
              },
              handler: () => handleSelect('En Proceso'),
              cssClass: selectedOption === 'En Proceso' ? 'selected-option' : '',
            },
            {
              text: t('status.pending'),
              data: {
                action: 'pendiente',
              },
              handler: () => handleSelect('Pendiente'),
              cssClass: selectedOption === 'Pendiente' ? 'selected-option' : '',
            },
            {
              text: t('actions.remove_filter'),
              role: 'cancel',
              cssClass: 'quitar-filtro',
              data: {
                action: 'quitar_filtro',
              },
              handler: () => handleSelect(null), // Quitar el filtro
              // No aplicar cssClass para "Quitar filtro"
            },
          ]}
          onDidDismiss={() => setIsOpen(false)}
        ></IonActionSheet>
      </>
    );
}

export default FilterOption;