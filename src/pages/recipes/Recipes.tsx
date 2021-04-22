import {
    IonBadge,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
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
import {add, stopwatchOutline} from "ionicons/icons";
import React from "react";
import AddRecipe from "../../components/add-recipe-modal/AddRecipe";
import {RecipeModel} from "../../models/recipe.model";
import RecipeDetail from "../../components/recipe-detail-modal/RecipeDetail";

type RecipeState = {
    showModal: boolean;
    detailModal: boolean;
    recipeList: RecipeModel[];
    selectedRecipe: RecipeModel | undefined;
}
class Recipes extends React.Component<any, RecipeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            detailModal: false,
            showModal: false,
            recipeList: [],
            selectedRecipe: undefined
        };
    }
    onModalClose = (data?: RecipeModel) => {
        this.setState({ showModal: false });
        if(data){
            console.log(data);
        }
    }
    openRecipe(recipe: RecipeModel) {
        this.setState({ detailModal: true, selectedRecipe: recipe });
    }
    closeRecipe = () => {
        this.setState({detailModal: false});
    }
    componentDidMount() {
        this.getRecipeList();
    }

    getRecipeList(){
        fetch(`assets/data/recipe.json`)
            .then(res => res.json())
            .then(res => {
                this.setState({ recipeList: res })
            })
    }
    renderRecipeList(){
        if(this.state.recipeList && this.state.recipeList.length > 0){
            return (
                <div>
                    {this.state.recipeList.map(recipe => (
                        <IonCard className="recipe-card" key={recipe.id} onClick={() => {this.openRecipe(recipe)}}>
                            <img src={recipe.imageUrl} />
                            <IonCardHeader>
                                <IonCardTitle className="rc-title">{recipe.name}</IonCardTitle>
                                <IonCardSubtitle className="rc-sub-title">
                                    <span>{recipe.cuisine}</span>
                                    <span>
                                        <IonBadge className="rc-badge" color="pink">
                                            <IonIcon className="duration-icon" icon={stopwatchOutline}/>
                                            {recipe.duration}
                                        </IonBadge>
                                    </span>
                                </IonCardSubtitle>
                            </IonCardHeader>
                        </IonCard>
                    ))}
                </div>
            )
        }else{
            return <div>No Recipes Found</div>
        }
    }
    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton color="dark"/>
                        </IonButtons>
                        <IonTitle>RECIPE LIST</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonFab vertical="top" horizontal="end" edge slot="fixed">
                        <IonFabButton color="violet" onClick={() => this.setState({showModal: true})}>
                            <IonIcon icon={add}/>
                        </IonFabButton>
                    </IonFab>
                    <AddRecipe isOpen={this.state.showModal} onClose={this.onModalClose}/>
                    <RecipeDetail isOpen={this.state.detailModal} onClose={this.closeRecipe} initData={this.state.selectedRecipe}/>
                    {this.renderRecipeList()}
                </IonContent>
            </IonPage>
        );
    }
}
export default Recipes;
