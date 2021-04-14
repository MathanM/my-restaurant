import {
    IonButton,
    IonButtons,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonTextarea,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './AddShop.css';
import React from "react";
import {arrowBack, checkmarkOutline, refreshOutline} from "ionicons/icons";
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {ShopModel} from "../../models/shop.model";


const AddShop: React.FC<any> = ({isOpen, onClose, initData}) => {
    const initFormValue: ShopModel = {
        name: '',
        desc: '',
    }
    const {control, handleSubmit, reset, formState} = useForm<ShopModel>({
        defaultValues: initData || initFormValue,
        mode: "onChange"
    });
    const onSubmit: SubmitHandler<ShopModel> = (formValue: ShopModel) => {
        onClose(formValue);
        reset();
    }
    const onReset = () => {
        reset();
    }
    return (
        <IonModal isOpen={isOpen} cssClass='flexible-modal'>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => {onClose()}}>
                            <IonIcon slot="icon-only" icon={arrowBack}/>
                        </IonButton>
                    </IonButtons>
                    <IonTitle>ADD SHOP</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <IonList>
                        <IonItem>
                            <IonLabel position="floating">Name</IonLabel>
                            <Controller
                                name="name"
                                control={control}
                                render={({field}) => <IonInput name="name" value={field.value}
                                                               onIonChange={e => field.onChange(e.detail.value!)}/>}
                                rules={{required: true}}
                            />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Description</IonLabel>
                            <Controller
                                name="desc"
                                control={control}
                                render={({field}) => <IonTextarea name="desc" value={field.value} rows={4}
                                                                  onIonChange={e => field.onChange(e.detail.value!)}/>}
                                rules={{required: true}}
                            />
                        </IonItem>
                    </IonList>
                    <IonFooter id="modal-footer">
                        <IonToolbar>
                            <IonButtons slot="primary">
                                <IonButton type="button" size="large" fill="outline" color="medium"
                                           onClick={() => onReset()}>
                                    <IonIcon slot="start" icon={refreshOutline}/>
                                    RESET
                                </IonButton>
                                <IonButton disabled={!formState.isValid} type="submit" size="large" fill="outline"
                                           color="primary">
                                    <IonIcon slot="start" icon={checkmarkOutline}/>
                                    SAVE
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonFooter>
                </form>
            </IonContent>
        </IonModal>
    );
};

export default AddShop;
