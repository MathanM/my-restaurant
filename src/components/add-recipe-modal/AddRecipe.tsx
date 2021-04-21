import {
    IonButton,
    IonButtons,
    IonContent,
    IonDatetime,
    IonFooter,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './AddRecipe.css';
import React, {useState} from "react";
import {add, arrowBack, checkmarkOutline, refreshOutline, remove} from "ionicons/icons";
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {RecipeModel} from "../../models/recipe.model";
import AddIngredient from "../add-ingredient-modal/AddIngredient";


const AddRecipe: React.FC<any> = ({isOpen, onClose, initData}) => {
    const initFormValue: RecipeModel = {
        id:'',
        name: '',
        duration: '00:00',
        ingredients: [],
        preparation: {},
        cuisine: '',
        imageUrl: ''
    }
    const [step, setStep] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const {control, handleSubmit, reset, formState, getValues} = useForm<RecipeModel>({
        defaultValues: initData || initFormValue,
        mode: "onChange",
    });
    const onSubmit: SubmitHandler<RecipeModel> = (formValue: RecipeModel) => {
        onClose(formValue);
        reset();
    }
    const onReset = () => {
        setStep(1);
        reset({
            duration: '00:00'
        });
    }
    function getSteps(): number[] {
        // @ts-ignore
        return [...Array(step).keys()];
    }
    const addStep = () => {
        setStep((step)=> step + 1)
    }
    const removeStep = () => {
        setStep((step)=> step - 1)
    }
    const onModalClose = () => {
        setShowModal(false);
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
                    <IonTitle>ADD RECIPE</IonTitle>
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
                            <IonLabel position="floating">Cuisine</IonLabel>
                            <Controller
                                name="cuisine"
                                control={control}
                                render={({field}) => <IonInput name="cuisine" value={field.value}
                                                                  onIonChange={e => field.onChange(e.detail.value!)}/>}
                                rules={{required: true}}
                            />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Duration (hh:mm)</IonLabel>
                            <Controller
                                name="duration"
                                control={control}
                                render={({field}) => <IonDatetime hourValues="0,1,2,3,4,5" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" name="duration" displayFormat="HH:mm" value={field.value} onIonChange={e => field.onChange(e.detail.value!)}/>}
                                rules={{required: true}}
                            />
                        </IonItem>
                        <IonItem onClick={() => setShowModal(true)}><IonLabel>Ingredients</IonLabel></IonItem>
                        <IonItem><IonLabel>Preparation</IonLabel></IonItem>
                        {getSteps().map(i => (
                            <React.Fragment key={i}>
                                <IonItem>
                                    <IonLabel position="floating">Step {i + 1}</IonLabel>
                                    <Controller
                                        name={`preparation.step${i + 1}` as any}
                                        control={control}
                                        render={({field}) => <IonInput name={`preparation.step${i + 1}`}
                                                                       value={field.value}
                                                                       onIonChange={e => field.onChange(e.detail.value!)}/>}
                                    />
                                </IonItem>
                                {i + 1 === step ? (<IonButtons slot="start">
                                    <IonButton onClick={addStep}>
                                        <IonIcon slot="icon-only" icon={add}/>
                                    </IonButton>
                                    {i > 0 ?<IonButton onClick={removeStep}>
                                        <IonIcon slot="icon-only" icon={remove}/>
                                    </IonButton>: <React.Fragment/>}
                                </IonButtons>) : <React.Fragment/>}
                            </React.Fragment>
                        ))}
                    </IonList>
                </form>
                <AddIngredient isOpen={showModal} onClose={onModalClose}/>
            </IonContent>
            <IonFooter id="modal-footer">
                <IonToolbar>
                    <IonButtons slot="primary">
                        <IonButton size="large" fill="outline" color="medium"
                                   onClick={() => onReset()}>
                            <IonIcon slot="start" icon={refreshOutline}/>
                            RESET
                        </IonButton>
                        <IonButton disabled={!formState.isValid} onClick={() => onSubmit(getValues())} size="large" fill="outline"
                                   color="primary">
                            <IonIcon slot="start" icon={checkmarkOutline}/>
                            SAVE
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonFooter>
        </IonModal>
    );
};

export default AddRecipe;
