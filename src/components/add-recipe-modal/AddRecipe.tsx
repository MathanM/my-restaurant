import {
    IonBadge,
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
    IonModal,
    IonTextarea,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './AddRecipe.css';
import React, {useEffect, useState} from "react";
import {add, arrowBack, checkmarkOutline, refreshOutline, remove} from "ionicons/icons";
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {Ingredient, RecipeModel} from "../../models/recipe.model";
import AddIngredient from "../add-ingredient-modal/AddIngredient";
import IngredientTable from "../ingredient-table/IngredientTable";
import {API, graphqlOperation} from "aws-amplify";
import {deleteIngredientAmount, updateIngredientAmount} from "../../graphql/mutations";
import {quantityInputConversion, QuantityParams} from "../../services/util.service";
import {createIngredients} from "../../services/api.service";

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

const AddRecipe: React.FC<any> = ({isOpen, onClose, initData, edit}) => {
    const initFormValue: RecipeModel = edit && initData? initData:{
        id: '',
        name: '',
        duration: '00:00',
        ingredients: [],
        preparation: {},
        cuisine: '',
        imageUrl: [],
        description: '',
        tags: []
    }
    const initStep = edit && initData && initData.preparation ? Object.keys(initData.preparation).length : 1;
    const [step, setStep] = useState(initStep);
    const initTags = edit && initData && initData.tags ? initData.tags : [];
    const [tags, setTags] = useState<string[]>(initTags);
    const [showModal, setShowModal] = useState(false);
    const initIngList = edit && initData && initData.ingredients ? initData.ingredients : [];
    const [ingList, setIngList] = useState<Ingredient[]>(initIngList);
    const {control, handleSubmit, reset, formState, getValues} = useForm<RecipeModel>({
        defaultValues: initFormValue,
        mode: "onChange",
    });
    useEffect(()=>{
        onReset();
    },[edit])
    const onSubmit: SubmitHandler<RecipeModel> = (formValue: RecipeModel) => {
        formValue.ingredients = ingList.map(ing => {
            const quantityParam: QuantityParams = quantityInputConversion(ing.quantityInput);
            return {
                ...ing,
                ...quantityParam
            }
        })
        onClose(formValue);
        onReset();
    }
    const onReset = () => {
        setStep(initStep);
        setIngList(initIngList);
        setTags(initTags);
        reset(initFormValue);
    }

    function getSteps(): number[] {
        return Array.from(Array(step).keys());
    }

    const addStep = () => {
        setStep((step) => step + 1)
    }
    const removeStep = () => {
        setStep((step) => step - 1)
    }
    const onModalClose = (data: Ingredient[]) => {
        setShowModal(false);
        if (data && data.length > 0) {
            setIngList(ing => [...ing, ...data]);
        }
        if(initData && initData.id){
            createIngredients(data, initData.id);
        }
    }
    const onQuantityUpdate = async(val: string, ing: Ingredient) => {
        ing.quantityInput = val;
        setIngList([...ingList]);
        if(ing.id){
            const quantityParam: QuantityParams = quantityInputConversion(ing.quantityInput);
            await API.graphql(graphqlOperation(updateIngredientAmount, {
                input: {
                    id: ing.id,
                    ...quantityParam
                }
            }));
        }
    }
    const onRemoveIng = async(ing: Ingredient, index: number) => {
        const result = [...ingList];
        result.splice(index,1);
        setIngList(result);
        if(ing.id){
            await API.graphql(graphqlOperation(deleteIngredientAmount, {
                input: {
                    id: ing.id
                }
            }));
        }
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
                    <IonTitle>{edit ? "EDIT" : "ADD"} RECIPE</IonTitle>
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
                        {ingList.length > 0 &&
                            <IngredientTable edit={true} ingredients={ingList} onIngredientUpdate={onQuantityUpdate} onIngredientRemove={onRemoveIng}/>
                        }
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
                <AddIngredient isOpen={showModal} onClose={onModalClose} />
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
