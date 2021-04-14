import {
    IonButtons,
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Recipes.css';
import {add} from "ionicons/icons";
import {useState} from "react";
import AddRecipe from "../../components/add-recipe-modal/AddRecipe";
import {RecipeModel} from "../../models/recipe.model";

const Recipes: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const onModalClose = (data?: RecipeModel) => {
        setShowModal(false);
        if(data){
            console.log(data);
        }
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>RECIPE LIST</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonFab vertical="top" horizontal="end" edge slot="fixed">
                    <IonFabButton onClick={() => setShowModal(true)}>
                        <IonIcon icon={add}/>
                    </IonFabButton>
                </IonFab>
                <AddRecipe isOpen={showModal} onClose={onModalClose}/>
            </IonContent>
        </IonPage>
    );
};

export default Recipes;
