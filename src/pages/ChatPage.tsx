import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonInput } from '@ionic/react';
import { Keyboard } from "@capacitor/keyboard";
import "../theme/ComponentsTheme/ChatPage.css";

Keyboard.addListener("keyboardWillShow", ({ keyboardHeight }) => {
  document.querySelector("ion-app")!.style.height = `${window.outerHeight - keyboardHeight}px`;
});

Keyboard.addListener("keyboardWillHide", () => {
  document.querySelector("ion-app")!.style.height = "";
});

const ChatPage: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Chat</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Aquí puedes añadir el contenido principal de la página */}
      </IonContent>
      <IonFooter>
        <IonToolbar>
        <IonInput placeholder="Escribe tu mensaje aquí" />
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ChatPage;
