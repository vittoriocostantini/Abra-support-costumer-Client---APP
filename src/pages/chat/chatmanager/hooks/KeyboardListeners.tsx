// src/components/stateless/KeyboardListeners.tsx
import { useEffect } from 'react';
import { Keyboard } from "@capacitor/keyboard";

interface KeyboardListenersProps {
  onKeyboardShow: () => void;
  onKeyboardHide: () => void;
}

const KeyboardListeners: React.FC<KeyboardListenersProps> = ({ onKeyboardShow, onKeyboardHide }) => {
  useEffect(() => {
    let showListener: any;
    let hideListener: any;

    const setupListeners = async () => {
      showListener = await Keyboard.addListener("keyboardWillShow", onKeyboardShow);
      hideListener = await Keyboard.addListener("keyboardWillHide", onKeyboardHide);
    };

    setupListeners();

    return () => {
      if (showListener) showListener.remove();
      if (hideListener) hideListener.remove();
    };
  }, [onKeyboardShow, onKeyboardHide]);

  return null; // Este componente no renderiza nada
};
export default KeyboardListeners;
