import {
    IonButton,
    IonButtons,
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon, IonList,
    IonMenuButton, IonModal,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonInput, IonLabel,
    IonListHeader
} from '@ionic/react';
import './Home.css';
import {add} from "ionicons/icons";
import {useState} from "react";

const Home: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState<string>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>My Resturant</IonTitle>
        </IonToolbar>
      </IonHeader>

        <IonContent fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">My Resturant</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonFab vertical="top" horizontal="end" edge slot="fixed">
                <IonFabButton onClick={() => setShowModal(true)}>
                    <IonIcon icon={add}/>
                </IonFabButton>
            </IonFab>
            <IonModal isOpen={showModal} cssClass='my-custom-class'>
                <IonList>
                    <IonListHeader>
                        <IonLabel>Add Shop</IonLabel>
                    </IonListHeader>
                    <IonItem>
                        <IonLabel position="fixed">Name</IonLabel>
                        <IonInput value={text} onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonList>
                <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
            </IonModal>
        </IonContent>
    </IonPage>
  );
};

export default Home;
