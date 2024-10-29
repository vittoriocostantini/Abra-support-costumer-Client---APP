// src/components/KeyboardHandler.tsx
import { useEffect } from 'react';
import { Keyboard } from "@capacitor/keyboard";

const KeyboardHandler: React.FC = () => {
  useEffect(() => {
    let showListener: any;
    let hideListener: any;

    const setupListeners = async () => {
      showListener = await Keyboard.addListener("keyboardWillShow", ({ keyboardHeight }: { keyboardHeight: number }) => {
        document.querySelector("ion-app")!.style.height = `${window.outerHeight - keyboardHeight - -50}px`;
      });

      hideListener = await Keyboard.addListener("keyboardWillHide", () => {
        document.querySelector("ion-app")!.style.height = "";
      });
    };

    setupListeners();

    return () => {
      showListener?.remove();
      hideListener?.remove();
    };
  }, []);

  return null; // Este componente no renderiza nada
};

export default KeyboardHandler;
