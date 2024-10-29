import { Keyboard } from "@capacitor/keyboard";
import { useIonRouter } from '@ionic/react';
import { useRef, useState } from 'react';

// Estado para manejar si el icono de enviar ha sido clicado
export const useSendIconState = () => useState(false);

// Estado para manejar la visibilidad del teclado
export const useKeyboardVisibilityState = () => useState(false);

// Referencia al input de texto
export const useInputRef = () => useRef<HTMLInputElement>(null);

// Función para manejar la aparición del teclado
export const handleKeyboardShow = (setIsKeyboardVisible: React.Dispatch<React.SetStateAction<boolean>>) => {
  setIsKeyboardVisible(true);
};

// Función para manejar la desaparición del teclado
export const handleKeyboardHide = (setIsKeyboardVisible: React.Dispatch<React.SetStateAction<boolean>>) => {
  setIsKeyboardVisible(false);
};

// Función para manejar el clic en el icono de enviar
export const handleSendClick = (
  event: React.MouseEvent,
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>,
  isKeyboardVisible: boolean,
  inputRef: React.RefObject<HTMLInputElement>
) => {
  event.preventDefault();
  event.stopPropagation();
  setIsClicked(true);

  console.log("Icono de enviar pulsado");
  // Aquí puedes añadir la lógica para enviar el mensaje

  // Si el teclado está visible, vuelve a enfocar el input para mantenerlo visible
  if (isKeyboardVisible && inputRef.current) {
    inputRef.current.focus();
  }

  // Remover la clase después de un tiempo para permitir múltiples clics
  setTimeout(() => setIsClicked(false), 200);
};

