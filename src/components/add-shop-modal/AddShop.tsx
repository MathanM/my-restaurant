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
    const initFormValue = {
        name:'',
        desc: '',
    }
    const [formValue, setFormValue] = useState(initFormValue);
    const handleIonChange = (event: any) => {
        setFormValue(prevState =>  ({
            ...prevState,
            [event.target.name]: event.target.value
        } ))
    }
    const onSubmit = () => {
        console.log(formValue);
    }
    const onReset = () => {
        setFormValue(initFormValue);
    }
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
                        <IonInput name="name" value={formValue.name} onIonChange={e => handleIonChange(e)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Description</IonLabel>
                        <IonTextarea name="desc" rows={4} value={formValue.desc} onIonChange={e => handleIonChange(e)} />
                    </IonItem>
                </IonList>
            </IonContent>
            <IonFooter id="modal-footer">
                <IonToolbar>
                    <IonButtons slot="primary">
                        <IonButton size="large" fill="outline" color="medium" onClick={() => onReset()}>
                            <IonIcon slot="start" icon={refreshOutline} />
                            RESET
                        </IonButton>
                        <IonButton size="large" fill="outline" color="primary" onClick={() => onSubmit()} >
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
