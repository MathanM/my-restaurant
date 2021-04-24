import {IonButton, IonContent, IonIcon, IonModal, IonText} from '@ionic/react';
import './RecipeDetail.css';
import React from "react";
import {chevronBackOutline, pizza, radioButtonOn, starHalf, stopwatch} from "ionicons/icons";
import {RecipeModel} from "../../models/recipe.model";


const RecipeDetail: React.FC<any> = ({isOpen, onClose, initData}) => {
    const recipe: RecipeModel = initData;
    return (
        <IonModal isOpen={isOpen} cssClass='flexible-modal'>
            {initData && <IonContent className="recipe-detail">
                <IonButton color="light" className="rd-back" onClick={() => {onClose()}}>
                    <IonIcon icon={chevronBackOutline} />
                </IonButton>
                <img src={recipe.imageUrl} alt={recipe.name}/>
                <div className="rd-content ion-padding">
                    <div className="rd-handle"/>
                    <h1>{recipe.name}</h1>
                    {recipe.description && <p>{recipe.description}</p>}
                    <div className="rd-info">
                        <div className="info-slot">
                            <IonIcon className="info-icon" icon={stopwatch} color="violet" />
                            {recipe.duration}
                            <IonText className="info-sub" color="medium">Duration</IonText>
                        </div>
                        <div className="info-slot">
                            <IonIcon className="info-icon" icon={pizza} color="violet" />
                            {recipe.cuisine}
                            <IonText className="info-sub" color="medium">Cuisine</IonText>
                        </div>
                        <div className="info-slot">
                            <IonIcon className="info-icon" icon={starHalf} color="violet" />
                            0
                            <IonText className="info-sub" color="medium">Ratings</IonText>
                        </div>
                    </div>
                    <h2>Ingredients</h2>
                    <table className="table table-style-1">
                        <thead>
                        <tr><th colSpan={2}></th><th className="tc">quantity</th></tr>
                        </thead>
                        <tbody>
                        <tr><td></td><td>Basmathi Rice</td><td className="tc">200g</td></tr>
                        <tr><td></td><td>Chicken Breast</td><td className="tc">4 slices</td></tr>
                        <tr><td></td><td>Carrot</td><td className="tc">2</td></tr>
                        </tbody>
                    </table>
                    <h2>Recipe</h2>
                    <div className="rd-steps">
                        {recipe.preparation && Object.keys(recipe.preparation).map((step, index) => (
                            <div key={index}>
                                <h6><IonIcon className="step-icon" icon={radioButtonOn} color="violet" />Step {index + 1}</h6>
                                <p>{recipe.preparation[step]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </IonContent>}
        </IonModal>
    );
};

export default RecipeDetail;
