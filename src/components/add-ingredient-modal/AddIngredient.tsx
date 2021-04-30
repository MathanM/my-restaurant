import {
    IonAvatar,
    IonButton,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonRippleEffect,
    IonSearchbar,
    IonText,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './AddIngredient.css';
import React, {useEffect, useState} from "react";
import {arrowBack, chevronDown, chevronUp, closeOutline} from "ionicons/icons";
import {placeHolderImg} from "../../models/constant";
import {Ingredient} from "../../models/recipe.model";
import {API, graphqlOperation} from "aws-amplify";
import {listIngredients} from "../../graphql/queries";

const AddIngredient: React.FC<any> = ({isOpen, onClose}) => {
    const [searchText, setSearchText] = useState('');
    const [result, setResult] = useState<Ingredient[]>([]);
    const [selectedIng, setSelectedIng] = useState<Ingredient[]>([]);
    const [showFlag, setShowFlag] = useState(true);

    useEffect(()=>{
        if(searchText.length > 2){
            getIngredientList(searchText)
        }
    },[searchText]);

    const getIngredientList = async(keyword: string) => {
        const result: any = await API.graphql(graphqlOperation(listIngredients, {
            filter: {name: {contains: keyword}},
            limit: 50
        }));
        setResult(result.data.listIngredients.items);
    }
    const onSelectIng = (item: Ingredient) => {
        setSelectedIng((state) => {
            return [...state, item]
        })
    }
    const onRemoveIng = (index: number) => {
        setSelectedIng((state) => {
            const items = [...state]
            items.splice(index, 1);
            return items;
        })
    }
    const toggleFlag = () => {
        setShowFlag((state) => !state);
    }
    const renderIngredientList = () => {
        if(result && result.length > 0){
                return (
                    <IonList className="ing-list">
                        {result.map((item: any, index: number) => (
                            <IonCard color="pink" className="ing-card ion-activatable" key={index} onClick={onSelectIng.bind(undefined,item)}>
                                <img src={item.imageUrl?item.imageUrl:placeHolderImg} alt={item.name}/>
                                <IonCardHeader>
                                    <IonCardSubtitle className="ing-sub-title">{item.name}</IonCardSubtitle>
                                </IonCardHeader>
                                <IonRippleEffect/>
                            </IonCard>
                        ))}
                    </IonList>
                );
        }else{
            return (
                <div className="no-data tc">
                    <img src="assets/icon/cook-no-data.png" alt="no-data"/>
                    <IonText color="medium"><h3>{searchText.length > 2?'No Result Found':'Search your Ingredients'}</h3></IonText>
                </div>
            );
        }
    }
    const renderSelectedIngredient = () => {
        if(selectedIng && selectedIng.length > 0){
            return (
                <IonList>
                    <IonItem lines="none">
                        <IonLabel><strong>Selected Items: {selectedIng.length}</strong></IonLabel>
                        <IonButton mode="ios" color="light" slot="end" onClick={toggleFlag}>
                            <IonIcon slot="icon-only" icon={showFlag?chevronDown:chevronUp}/>
                        </IonButton>
                    </IonItem>
                    {showFlag && selectedIng.map((item, index) => (
                        <IonItem key={index} lines="none">
                            <IonAvatar slot="start">
                                <img src={item.imageUrl?item.imageUrl:placeHolderImg} alt={item.name}/>
                            </IonAvatar>
                            <IonLabel>
                                <h2>{item.name}</h2>
                            </IonLabel>
                            <IonButton mode="ios" color="light" slot="end" onClick={onRemoveIng.bind(undefined, index)}>
                                <IonIcon slot="icon-only" icon={closeOutline}/>
                            </IonButton>
                        </IonItem>
                    ))}
                </IonList>
            );
        }
    }

    return (
        <IonModal isOpen={isOpen} cssClass='flexible-modal'>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton color="dark" onClick={() => {onClose(selectedIng)}}>
                            <IonIcon slot="icon-only" icon={arrowBack}/>
                        </IonButton>
                    </IonButtons>
                    <IonTitle>ADD INGREDIENTS</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSearchbar placeholder="Search Ingredients" value={searchText}
                                  onIonChange={e => setSearchText(e.detail.value!)} animated/>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                {renderIngredientList()}
            </IonContent>

            <IonFooter>
                {renderSelectedIngredient()}
            </IonFooter>
        </IonModal>
    );
};

export default AddIngredient;
