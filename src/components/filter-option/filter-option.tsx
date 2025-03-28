import React, { useState } from 'react';
import './filter-option.css';
import { IonIcon, IonButton, IonActionSheet } from '@ionic/react';
import { ellipsisHorizontal } from 'ionicons/icons';

interface FilterOptionProps {
    onFilterSelect: (estado: string | null) => void; // Permitir null para quitar el filtro
}

const FilterOption: React.FC<FilterOptionProps> = ({ onFilterSelect }) => {
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
              text: 'Completado',
              data: {
                action: 'completado',
              },
              handler: () => handleSelect('Completado'),
              cssClass: selectedOption === 'Completado' ? 'selected-option' : '',
            },
            {
              text: 'En proceso',
              data: {
                action: 'en_proceso',
              },
              handler: () => handleSelect('En Proceso'),
              cssClass: selectedOption === 'En Proceso' ? 'selected-option' : '',
            },
            {
              text: 'Pendiente',
              data: {
                action: 'pendiente',
              },
              handler: () => handleSelect('Pendiente'),
              cssClass: selectedOption === 'Pendiente' ? 'selected-option' : '',
            },
            {
              text: 'Quitar filtro',
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