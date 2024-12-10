import React from 'react';
import { IonSearchbar } from '@ionic/react';
import '../../../theme/Page-themes/SearchPage.css';

const SearchBarPage: React.FC = () => {
  return (
    <IonSearchbar 
      animated={true} 
      placeholder="Buscar"
      className='searchbar'
    />
  );
}

export default SearchBarPage;
