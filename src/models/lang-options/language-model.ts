// Definición de la interfaz para los elementos de idioma
export interface LanguageOption {
  code: string; // Código del idioma (ej. 'es', 'en', 'fr')
  label: string; // Nombre del idioma (ej. 'Español', 'Inglés', 'Francés')
}

// Lista de opciones de idioma
export const languageOptions: LanguageOption[] = [
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
  { code: 'jw', label: 'Javanés' },
  { code: 'su', label: 'Sundanés' },
  { code: 'xh', label: 'Xhosa' },
  { code: 'zu', label: 'Zulú' },
  // Añadir más idiomas según sea necesario
];

// Interfaz para las propiedades del componente
export interface LanguajeProps {
  initialLanguage?: string; // Idioma inicial opcional
}

// Función para obtener el idioma actual (podría expandirse para usar localStorage, etc.)
export const getCurrentLanguage = (): string => {
  // Aquí podrías implementar lógica para obtener el idioma guardado
  return localStorage.getItem('selectedLanguage') || '';
};

// Función para guardar el idioma seleccionado
export const saveLanguage = (language: string): void => {
  localStorage.setItem('selectedLanguage', language);
  // Aquí podrías añadir más lógica para aplicar el cambio de idioma en la app
};