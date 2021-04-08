import {
    IonButton,
    IonButtons,
    IonContent, IonFooter,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonModal, IonTextarea,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './AddShop.css';
import {useState} from "react";
import {arrowBack, checkmarkOutline, refreshOutline} from "ionicons/icons";

const AddShop: React.FC<any> = ({isOpen, onClose}) => {
    const [name, setName] = useState<string>();
    const [desc, setDesc] = useState<string>();
    return (
        <IonModal backdropDismiss={true} isOpen={isOpen} cssClass='flexible-modal'>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={onClose}>
                            <IonIcon slot="icon-only" icon={arrowBack}/>
                        </IonButton>
                    </IonButtons>
                    <IonTitle>ADD SHOP</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    <IonItem>
                        <IonLabel position="floating">Name</IonLabel>
                        <IonInput value={name} onIonChange={e => setName(e.detail.value!)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Description</IonLabel>
                        <IonTextarea rows={4} value={desc} onIonChange={e => setDesc(e.detail.value!)} />
                    </IonItem>
                </IonList>
            </IonContent>
            <IonFooter id="modal-footer">
                <IonToolbar>
                    <IonButtons slot="primary">
                        <IonButton size="large" fill="outline" color="medium" >
                            <IonIcon slot="start" icon={refreshOutline} />
                            RESET
                        </IonButton>
                        <IonButton size="large" fill="outline" color="primary" >
                            <IonIcon slot="start" icon={checkmarkOutline} />
                            SAVE
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonFooter>
        </IonModal>
    );
};

export default AddShop;
