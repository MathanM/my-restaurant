import {IonButton, IonContent, IonModal} from '@ionic/react';
import './AddShop.css';
import {useState} from "react";

const AddShop: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <IonContent>
            <IonModal isOpen={showModal} cssClass='my-custom-class'>
                <p>This is modal content</p>
                <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
            </IonModal>
            <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
        </IonContent>
    );
};

export default AddShop;
