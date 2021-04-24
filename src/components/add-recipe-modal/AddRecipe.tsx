import {
    IonAvatar, IonBadge,
    IonButton,
    IonButtons,
    IonChip,
    IonContent,
    IonDatetime,
    IonFooter,
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
import './AddRecipe.css';
import React, {useState} from "react";
import {add, arrowBack, checkmarkOutline, refreshOutline, remove} from "ionicons/icons";
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {RecipeModel, Result} from "../../models/recipe.model";
import AddIngredient from "../add-ingredient-modal/AddIngredient";

const TagController = ({control, transform, name}: any) => (
    <Controller
        control={control}
        name={name}
        render={({field}) => (
            <IonInput placeholder="Enter comma (,) separated values "
                      onIonChange={e => field.onChange(transform.output(e.detail.value!))}
                      value={transform.input(field.value)}
            />
        )}
    />
);

const AddRecipe: React.FC<any> = ({isOpen, onClose, initData}) => {
    const initFormValue: RecipeModel = {
        id: '',
        name: '',
        duration: '00:00',
        ingredients: [],
        preparation: {},
        cuisine: '',
        imageUrl: '',
        description: '',
        tags: []
    }
    const [step, setStep] = useState(1);
    const [tags, setTags] = useState<string[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [ingList, setIngList] = useState<Result[]>([]);
    const {control, handleSubmit, reset, formState, getValues} = useForm<RecipeModel>({
        defaultValues: initData || initFormValue,
        mode: "onChange",
    });
    const onSubmit: SubmitHandler<RecipeModel> = (formValue: RecipeModel) => {
        formValue.ingredients = ingList.map(ing => {
            let quantity, unit;
            const quantityMatch = ing.food.quantity.match(new RegExp(/\d+/g));
            const unitMatch = ing.food.quantity.match(new RegExp(/[a-zA-Z]+/g));
            if (quantityMatch) {
                quantity = Number(quantityMatch[0]);
            }
            if (unitMatch) {
                unit = unitMatch[0];
            }
            return {
                id: ing.food.foodId,
                image: ing.food.image,
                label: ing.food.label,
                quantity: quantity ? quantity : 0,
                quantityUnit: unit ? unit : ""
            }
        })
        onClose(formValue);
        onReset();
    }
    const onReset = () => {
        setStep(1);
        setIngList([]);
        reset({
            duration: '00:00'
        });
    }

    function getSteps(): number[] {
        // @ts-ignore
        return [...Array(step).keys()];
    }

    const addStep = () => {
        setStep((step) => step + 1)
    }
    const removeStep = () => {
        setStep((step) => step - 1)
    }
    const onModalClose = (data: Result[]) => {
        setShowModal(false);
        if (data && data.length > 0) {
            setIngList(data);
        }
    }
    const onQuantityUpdate = (val: string, ing: Result) => {
        ing.food.quantity = val;
        setIngList([...ingList]);
    }
    return (
        <IonModal isOpen={isOpen} cssClass='flexible-modal'>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton color="dark" onClick={() => {
                            onClose()
                        }}>
                            <IonIcon slot="icon-only" icon={arrowBack}/>
                        </IonButton>
                    </IonButtons>
                    <IonTitle>ADD RECIPE</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding ar-content">
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
                                name="description"
                                control={control}
                                render={({field}) => <IonTextarea name="desc" value={field.value} rows={4}
                                                                  onIonChange={e => field.onChange(e.detail.value!)}/>}
                            />
                        </IonItem>
                        <IonItem lines="none">
                            <IonLabel position="stacked">Tags</IonLabel>
                            <TagController
                                transform={{
                                    input: (value: string[]) => value ? value.join(" ") : "",
                                    output: (e: string) => {
                                        e = e.replace(/,/g, " ")
                                        const tags = e.split(" ");
                                        setTags(tags);
                                        return tags;
                                    }
                                }}
                                control={control}
                                name="tags"
                            />
                        </IonItem>
                        {tags && tags.length > 0 &&
                        <IonItem className="tagsItem" lines="none">{tags.map((tag, index) => <IonBadge key={index}
                                                                                                       className="tag">{tag}</IonBadge>)}</IonItem>}
                        <IonItem lines="none">
                            <IonLabel position="stacked">Cuisine</IonLabel>
                            <Controller
                                name="cuisine"
                                control={control}
                                render={({field}) => <IonInput name="cuisine" value={field.value}
                                                               onIonChange={e => field.onChange(e.detail.value!)}/>}
                                rules={{required: true}}
                            />
                        </IonItem>
                        <IonItem lines="none">
                            <IonLabel position="stacked">Duration (hh:mm)</IonLabel>
                            <Controller
                                name="duration"
                                control={control}
                                render={({field}) => <IonDatetime hourValues="0,1,2,3,4,5"
                                                                  minuteValues="0,5,10,15,20,25,30,35,40,45,50,55"
                                                                  name="duration" displayFormat="HH:mm"
                                                                  value={field.value}
                                                                  onIonChange={e => field.onChange(e.detail.value!)}/>}
                                rules={{required: true}}
                            />
                        </IonItem>
                        <IonItem className="mt-10 mb-10" lines="none" onClick={() => setShowModal(true)}>
                            <IonLabel><strong>Ingredients</strong></IonLabel>
                            <IonButtons slot="end">
                                <IonButton className="add-success icn-btn" color="success">
                                    <IonIcon slot="icon-only" icon={add}/>
                                </IonButton>
                            </IonButtons>
                        </IonItem>
                        {ingList.length > 0 && <table className="table table-style-1">
                            <thead>
                            <tr>
                                <th colSpan={2}/>
                                <th className="tc">quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                            {ingList.map((item, index) => (
                                <tr key={index}>
                                    <td className="tc" width="60px">
                                        <IonAvatar>
                                            <img src={item.food.image} alt={item.food.label}/>
                                        </IonAvatar>
                                    </td>
                                    <td>{item.food.label}</td>
                                    <td className="tc">
                                        <IonInput className="mini-input"
                                                  onIonChange={e => onQuantityUpdate(e.detail.value!, item)}/>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>}
                        <IonItem lines="none"><IonLabel><strong>Preparation</strong></IonLabel></IonItem>
                        {getSteps().map(i => (
                            <React.Fragment key={i}>
                                <IonItem lines="none">
                                    <IonLabel position="stacked">Step {i + 1}</IonLabel>
                                    <Controller
                                        name={`preparation.step${i + 1}` as any}
                                        control={control}
                                        render={({field}) => <IonInput name={`preparation.step${i + 1}`}
                                                                       value={field.value}
                                                                       onIonChange={e => field.onChange(e.detail.value!)}/>}
                                    />
                                </IonItem>

                                {i + 1 === step ? (<IonItem lines="none"><IonButtons slot="start">
                                    <IonButton className="add-success icn-btn mr-15" color="success" onClick={addStep}>
                                        <IonIcon slot="icon-only" icon={add}/>
                                    </IonButton>
                                    {i > 0 ? <IonButton className="remove-danger icn-btn" color="danger"
                                                        onClick={removeStep}>
                                        <IonIcon slot="icon-only" icon={remove}/>
                                    </IonButton> : <React.Fragment/>}
                                </IonButtons></IonItem>) : <React.Fragment/>}
                            </React.Fragment>
                        ))}
                    </IonList>
                </form>
                <AddIngredient isOpen={showModal} onClose={onModalClose}/>
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

export default AddRecipe;
