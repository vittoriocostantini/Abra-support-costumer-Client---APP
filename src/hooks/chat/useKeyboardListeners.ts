// src/hooks/useKeyboardListeners.ts
import { useEffect } from 'react';
import { Keyboard } from "@capacitor/keyboard";
import { PluginListenerHandle } from '@capacitor/core';

// Hook para manejar los listeners del teclado
const useKeyboardListeners = () => {
    useEffect(() => {
        let showListener: PluginListenerHandle | undefined;
        let hideListener: PluginListenerHandle | undefined;

        const setupListeners = async () => {
            try {
                showListener = await Keyboard.addListener("keyboardWillShow", ({ keyboardHeight }) => {
                    const ionFooter = document.querySelector("ion-footer");
                    if (ionFooter) {
                        ionFooter.style.transform = `translateY(-${keyboardHeight}px)`;
                        ionFooter.style.transition = "transform 0.4s ";
                    }
                });

                hideListener = await Keyboard.addListener("keyboardWillHide", () => {
                    const ionFooter = document.querySelector("ion-footer");
                    if (ionFooter) {
                        ionFooter.style.transform = "translateY(0)";
                        ionFooter.style.transition = "transform 0.2s ease-out";
                    }
                });
            } catch (error) {
                console.error("Error setting up keyboard listeners:", error);
            }
        };

        setupListeners();

        return () => {
            if (showListener) showListener.remove();
            if (hideListener) hideListener.remove();
        };
    }, []);
};

export default useKeyboardListeners;