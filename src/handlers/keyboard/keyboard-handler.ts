import { useEffect } from "react";
import { Keyboard } from "@capacitor/keyboard";

// Hook para configurar los listeners del teclado
export const useKeyboardListeners = () => {
    useEffect(() => {
        const setupListeners = async () => {
            const keyboardWillShowListener = await Keyboard.addListener("keyboardWillShow", ({ keyboardHeight }) => {
                document.querySelector("ion-app")!.style.height = `${window.outerHeight - keyboardHeight}px`;
            });

            const keyboardWillHideListener = await Keyboard.addListener("keyboardWillHide", () => {
                document.querySelector("ion-app")!.style.height = "";
            });

            // Retornar una función para limpiar los listeners
            return () => {
                keyboardWillShowListener.remove();
                keyboardWillHideListener.remove();
            };
        };

        const cleanup = setupListeners();

        return () => {
            cleanup.then(fn => fn && fn());
        };
    }, []); // El array vacío asegura que esto se ejecute solo una vez al montar el componente
}; 