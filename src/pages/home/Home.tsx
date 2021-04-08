import {
    IonButtons,
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Home.css';
import {add} from "ionicons/icons";
import {useState} from "react";
import AddShop from "../../components/add-shop-modal/AddShop";

const Home: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>SHOPS</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonFab vertical="top" horizontal="end" edge slot="fixed">
                    <IonFabButton onClick={() => setShowModal(true)}>
                        <IonIcon icon={add}/>
                    </IonFabButton>
                </IonFab>
                <AddShop isOpen={showModal} onClose={() => setShowModal(false)}/>
            </IonContent>
        </IonPage>
    );
};

export default Home;
