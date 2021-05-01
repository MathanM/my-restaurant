import {IonButton, IonContent, IonIcon, IonModal, IonSlide, IonSlides, IonText} from '@ionic/react';
import './RecipeDetail.css';
import React from "react";
import {chevronBackOutline, pencil, pizza, radioButtonOn, starHalf, stopwatch} from "ionicons/icons";
import {RecipeModel} from "../../models/recipe.model";
import IngredientTable from "../ingredient-table/IngredientTable";


const RecipeDetail: React.FC<any> = ({isOpen, onClose, initData, onEdit}) => {
    const recipe: RecipeModel = initData;
    return (
        <React.Fragment>
            <IonModal isOpen={isOpen} cssClass='flexible-modal'>
                {initData && <IonContent className="recipe-detail">
                    {/* TODO: https://github.com/ionic-team/ionic-framework/issues/19638 */}
                    <IonSlides
                        pager={true}
                        options={{autoHeight: true}}
                        onIonSlidesDidLoad={function (this: any) {this.update()}}
                    >
                        {
                            recipe.imageUrl && recipe.imageUrl.map((img, index) =>
                                (img ? <IonSlide key={index}><img src={img} alt={recipe.name}/></IonSlide> :
                                    <React.Fragment/>))
                        }
                    </IonSlides>
                    <IonButton color="light" className="rd-back" onClick={() => {
                        onClose()
                    }}>
                        <IonIcon icon={chevronBackOutline}/>
                    </IonButton>
                    <IonButton color="violet" className="rd-edit" onClick={onEdit}>
                        <IonIcon icon={pencil}/>
                    </IonButton>
                    <div className="rd-content ion-padding">
                        <div className="rd-handle"/>
                        <h1>{recipe.name}</h1>
                        {recipe.description && <p>{recipe.description}</p>}
                        <div className="rd-info">
                            <div className="info-slot">
                                <IonIcon className="info-icon" icon={stopwatch} color="violet"/>
                                {recipe.duration}
                                <IonText className="info-sub" color="medium">Duration</IonText>
                            </div>
                            <div className="info-slot">
                                <IonIcon className="info-icon" icon={pizza} color="violet"/>
                                {recipe.cuisine}
                                <IonText className="info-sub" color="medium">Cuisine</IonText>
                            </div>
                            <div className="info-slot">
                                <IonIcon className="info-icon" icon={starHalf} color="violet"/>
                                0
                                <IonText className="info-sub" color="medium">Ratings</IonText>
                            </div>
                        </div>
                        <h2>Ingredients</h2>
                        <IngredientTable ingredients={recipe.ingredients}/>
                        <h2>Recipe</h2>
                        <div className="rd-steps">
                            {recipe.preparation && Object.keys(recipe.preparation).map((step, index) => (
                                <div key={index}>
                                    <h6><IonIcon className="step-icon" icon={radioButtonOn}
                                                 color="violet"/>Step {index + 1}</h6>
                                    <p>{recipe.preparation[step]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </IonContent>}
            </IonModal>
        </React.Fragment>
    );
};

export default RecipeDetail;
