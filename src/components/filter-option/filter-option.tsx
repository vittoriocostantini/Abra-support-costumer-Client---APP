import React, { useState, useRef } from 'react';
import './filter-option.css'; // Asegúrate de tener este archivo CSS
import { 

    IonIcon,
    IonButton,
    IonActionSheet
} from '@ionic/react';
import { ellipsisHorizontal } from 'ionicons/icons';
const FilterOption: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <>
        <IonButton  
        shape="round"
        onClick={() => setIsOpen(true)} 
        className='filter-button'>
          <IonIcon className='icon-button' icon={ellipsisHorizontal} slot='icon-only' />
        </IonButton>
        <IonActionSheet
          isOpen={isOpen}
          buttons={[
            {
              text: 'Completado',
              data: {
                action: 'completado',
              },
            },
            {
              text: 'En proceso',
              data: {
                action: 'en_proceso',
              },
            },
            {
              text: 'Pendiente',
              data: {
                action: 'pendiente',
              },
            },
          ]}
          onDidDismiss={() => setIsOpen(false)}
        ></IonActionSheet>
      </>
    );
  }
  export default FilterOption;