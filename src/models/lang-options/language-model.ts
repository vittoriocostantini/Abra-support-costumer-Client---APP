import i18n from '../../i18n/i18n';

// Definición de la interfaz para los elementos de idioma
export interface LanguageOption {
  code: string; // Código del idioma (ej. 'es', 'en', 'fr')
  label: string; // Nombre del idioma (ej. 'Español', 'Inglés', 'Francés')
}

// Lista de opciones de idioma
export const languageOptions: LanguageOption[] = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'Inglés' },
  { code: 'pt', label: 'Portugués' },
];

// Interfaz para las propiedades del componente
export interface LanguajeProps {
  initialLanguage?: string; // Idioma inicial opcional
}

// Función para obtener el idioma actual
export const getCurrentLanguage = (): string => {
  return localStorage.getItem('selectedLanguage') || i18n.language || 'es';
};

// Función para guardar el idioma seleccionado
export const saveLanguage = (language: string): void => {
  localStorage.setItem('selectedLanguage', language);
  i18n.changeLanguage(language);
};