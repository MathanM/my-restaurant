import {
    IonAvatar,
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
    IonModal, IonSearchbar,
    IonTextarea,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './AddIngredient.css';
import React, {useEffect, useState} from "react";
import {arrowBack, checkmarkOutline, refreshOutline} from "ionicons/icons";
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {ShopModel} from "../../models/shop.model";

type Result = {
    food: {
        foodId: string;
        image: string;
        label: string;
        categoryLabel: string;
    }
}
const AddIngredient: React.FC<any> = ({isOpen, onClose, initData}) => {
    const [searchText, setSearchText] = useState('');
    const [result, setResult] = useState<Result[]>([]);

    useEffect(()=>{
        if(searchText.length > 3){
            const keyword = encodeURI(searchText);
            fetch(`https://api.edamam.com/api/food-database/v2/parser?ingr=${keyword}&app_id=b0342509&app_key=4848d62a929f76361aa6a3d37cb5ebfb`)
                .then(res => res.json())
                .then((res: {parsed: Result[]}) => {
                    setResult(res.parsed);
                });
        }
    },[searchText]);

    const renderIngredientList = () => {
        if(result && result.length > 0){
            return (
                <IonList>
                    {result.map(item => (
                        <IonItem key={item.food.foodId}>
                            <IonAvatar slot="start">
                                <img src={item.food.image} alt={item.food.label}/>
                            </IonAvatar>
                            <IonLabel>
                                <h2>{item.food.label}</h2>
                                <p>{item.food.categoryLabel}</p>
                            </IonLabel>
                        </IonItem>
                    ))}
                </IonList>
            );
        }else{
            return <div>No Result Found</div>
        }
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
                    <IonTitle>ADD INGREDIENTS</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSearchbar placeholder="Search Ingredients" value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated />
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                {renderIngredientList()}
            </IonContent>

            <IonFooter>
                <IonToolbar>
                    Search Text: {searchText ?? '(none)'}
                </IonToolbar>
            </IonFooter>
        </IonModal>
    );
};

export default AddIngredient;
