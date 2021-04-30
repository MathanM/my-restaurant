import {IonAvatar, IonButton, IonContent, IonIcon, IonInput, IonModal, IonText} from '@ionic/react';
import './RecipeDetail.css';
import React, {useState} from "react";
import {chevronBackOutline, pencil, pizza, radioButtonOn, starHalf, stopwatch} from "ionicons/icons";
import {RecipeModel} from "../../models/recipe.model";
import AddRecipe from "../add-recipe-modal/AddRecipe";
import {Fragment} from "ionicons/dist/types/stencil-public-runtime";


const RecipeDetail: React.FC<any> = ({isOpen, onClose, initData}) => {
    const recipe: RecipeModel = initData;
    const [editModal, setEditModal] = useState(false);
    const onEditClose = () => {
        setEditModal(false);
    }
    const onOpenEdit = () => {
        setEditModal(true);
    }
    return (
        <React.Fragment>
            <IonModal isOpen={isOpen} cssClass='flexible-modal'>
                {initData && <IonContent className="recipe-detail">
                    <IonButton color="light" className="rd-back" onClick={() => {
                        onClose()
                    }}>
                        <IonIcon icon={chevronBackOutline}/>
                    </IonButton>
                    <IonButton color="violet" className="rd-edit" onClick={onOpenEdit}>
                        <IonIcon icon={pencil}/>
                    </IonButton>
                    {
                        recipe.imageUrl && recipe.imageUrl.map((img, index) =>
                            (img ? <img key={index} src={img} alt={recipe.name}/> : <React.Fragment/>))
                    }
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
                        <table className="table table-style-1">
                            <thead>
                            <tr>
                                <th colSpan={2}/>
                                <th className="tc">quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                            {recipe.ingredients.map((item: any, index) => (
                                <tr key={index}>
                                    <td className="tc" width="60px">
                                        <IonAvatar>
                                            <img src={item.imageUrl} alt={item.name}/>
                                        </IonAvatar>
                                    </td>
                                    <td>{item.name}</td>
                                    <td className="tc" width="90px">
                                        {item.quantity} {item.quantityUnit}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
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
            <AddRecipe edit={true} isOpen={editModal} onClose={onEditClose} initData={recipe} />
        </React.Fragment>
    );
};

export default RecipeDetail;
