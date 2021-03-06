import {
    IonButton,
    IonButtons,
    IonChip,
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
import { IKImage, IKContext, IKUpload } from "imagekitio-react"


const AddShop: React.FC<any> = ({isOpen, onClose, initData}) => {
    const initFormValue: ShopModel = {
        name: '',
        desc: '',
    }
    const {control, handleSubmit, reset, formState, getValues} = useForm<ShopModel>({
        defaultValues: initData || initFormValue,
        mode: "onChange",
    });
    const onSubmit: SubmitHandler<ShopModel> = (formValue: ShopModel) => {
        onClose(formValue);
        reset();
    }
    const onReset = () => {
        reset({});
    }
    const onError = (e: any) => {
        console.log(e);
    }
    const onSuccess = (e: any) => {
        console.log(e);
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
                    <IonList className="form-list">
                        <IonItem lines="none">
                            <IonLabel position="stacked">Name</IonLabel>
                            <Controller
                                name="name"
                                control={control}
                                render={({field}) => <IonInput name="name" value={field.value}
                                                               onIonChange={e => field.onChange(e.detail.value!)}/>}
                                rules={{required: true}}
                            />
                        </IonItem>
                        <IonItem lines="none">
                            <IonLabel position="stacked">Description</IonLabel>
                            <Controller
                                name="desc"
                                control={control}
                                render={({field}) => <IonTextarea name="desc" value={field.value} rows={4}
                                                                  onIonChange={e => field.onChange(e.detail.value!)}/>}
                                rules={{required: true}}
                            />
                        </IonItem>
                        <IKContext publicKey="public_X9PMqJ0IH6IDaNZfaD7B/p+93hM="
                                   urlEndpoint="https://ik.imagekit.io/k4mzfmleb"
                                   authenticationEndpoint="https://w8ntc2a588.execute-api.us-east-2.amazonaws.com/dev/image/auth">
                            <IKUpload
                                onError={onError}
                                onSuccess={onSuccess}
                            />
                        </IKContext>
                    </IonList>
                </form>
            </IonContent>
            <IonFooter id="modal-footer">
                <IonToolbar className="tr">
                    <IonChip color="medium"
                             onClick={() => onReset()}>
                        <IonIcon icon={refreshOutline}/>
                        <IonLabel>RESET</IonLabel>
                    </IonChip>
                    <IonChip onClick={() => onSubmit(getValues())}
                             color="violet">
                        <IonIcon icon={checkmarkOutline}/>
                        <IonLabel>SAVE</IonLabel>
                    </IonChip>
                </IonToolbar>
            </IonFooter>
        </IonModal>
    );
};

export default AddShop;
