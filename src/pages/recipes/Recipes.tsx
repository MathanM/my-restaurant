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
    IonSkeletonText,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Recipes.css';
import {add, stopwatchOutline} from "ionicons/icons";
import React from "react";
import AddRecipe from "../../components/add-recipe-modal/AddRecipe";
import {Ingredient, Preparation, RecipeModel} from "../../models/recipe.model";
import RecipeDetail from "../../components/recipe-detail-modal/RecipeDetail";
import {API, graphqlOperation} from "aws-amplify";
import {createRecipe, updateRecipe} from "../../graphql/mutations";
import {listRecipes} from "../../graphql/queries";
import {ListRecipesQuery} from "../../API";
import {RecipeItem, RecipeItems} from "../../models/graphql.model";
import {createIngredients} from "../../services/api.service";
import {loaderImg} from "../../models/constant";

type RecipeState = {
    showModal: boolean;
    detailModal: boolean;
    recipeList: RecipeItems;
    selectedRecipe: RecipeModel | undefined;
    edit: boolean;
}

class Recipes extends React.Component<any, RecipeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            edit: false,
            detailModal: false,
            showModal: false,
            recipeList: [],
            selectedRecipe: undefined
        };
    }

    onModalClose = (data?: RecipeModel) => {
        this.setState({showModal: false, edit: false});
        if (data) {
            if(this.state.edit){
                this.editRecipe(data);
            }else{
                this.createRecipe(data);
            }

        }

    }
    async editRecipe(data: RecipeModel){
        const result: any = await API.graphql(graphqlOperation(updateRecipe, {
            input: {
                id: data.id,
                name: data.name,
                duration: data.duration,
                description: data.description,
                tags: data.tags,
                cuisine: data.cuisine,
                preparation: Object.values(data.preparation)
            }
        }));
    }
    async createRecipe(data: RecipeModel){
        const result: any = await API.graphql(graphqlOperation(createRecipe, {
            input: {
                name: data.name,
                duration: data.duration,
                description: data.description,
                tags: data.tags,
                cuisine: data.cuisine,
                preparation: Object.values(data.preparation)
            }
        }));
        const recipeId = result.data.createRecipe.id;
        await createIngredients(data.ingredients,recipeId);
    }
    openRecipe(recipe: RecipeItem) {
        let preparation = recipe.preparation?.reduce((acc: Preparation, curVal: string | null, index: number) => {
            if (curVal) acc[`step${index+1}`] = curVal;
            return acc
        }, {});
        let ingredients: Ingredient[] = recipe.ingredients.items?.map((ing: any) => {
            return {
                id: ing.id,
                quantity: ing.quantity,
                quantityUnit: ing.quantityUnit,
                quantityInput: ing.quantity + ing.quantityUnit,
                imageUrl: ing.ingredient.imageUrl,
                name: ing.ingredient.name
            }
        })
        let selectedRecipe: RecipeModel = {
            id: recipe.id,
            name: recipe.name,
            preparation: preparation ? preparation : {},
            duration: recipe.duration,
            imageUrl: recipe.imageUrl,
            cuisine: recipe.cuisine,
            tags: recipe.tags,
            description: recipe.description,
            ingredients: ingredients ? ingredients : []
        }
        this.setState({detailModal: true, selectedRecipe});
    }

    closeRecipe = () => {
        this.setState({detailModal: false});
    }

    componentDidMount() {
        this.getRecipeList();
    }

    async getRecipeList() {
        const result = (await API.graphql(graphqlOperation(listRecipes, {
            filter: {status: {eq: "approved"}},
            limit: 50
        }))) as { data: ListRecipesQuery };
        let recipeList: RecipeItems = result.data.listRecipes?.items;
        this.setState({recipeList})
    }

    onEditRecipe = () => {
        this.setState({edit: true, showModal: true});
    }

    renderRecipeList() {
        if (this.state.recipeList && this.state.recipeList.length > 0) {
            return (
                <div>
                    {this.state.recipeList.map(recipe => (
                        (recipe && <IonCard className="recipe-card" key={recipe.id} onClick={() => {
                            this.openRecipe(recipe)
                        }}>
                            {recipe.imageUrl && recipe.imageUrl[0] && <img src={recipe.imageUrl[0]} alt={recipe.name}/>}
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
                        </IonCard>)
                    ))}
                </div>
            )
        } else {
            return (
                <div>
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map(item =>
                        <IonCard className="recipe-card" key={item}>
                            <img src={loaderImg} alt=""/>
                            <IonCardHeader>
                                <IonCardTitle className="rc-title"><IonSkeletonText animated style={{ width: '100%' }} /></IonCardTitle>
                                <IonCardSubtitle className="rc-sub-title">
                                    <IonSkeletonText animated style={{ width: '50%' }} />
                                    <span>
                                        <IonBadge className="rc-badge" color="pink">
                                            <IonSkeletonText animated style={{ width: '50px' }} />
                                        </IonBadge>
                                    </span>
                                </IonCardSubtitle>
                            </IonCardHeader>
                        </IonCard>
                    )}
                </div>
            )
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
                        <IonFabButton color="violet" onClick={() => this.setState({showModal: true, selectedRecipe: undefined})}>
                            <IonIcon icon={add}/>
                        </IonFabButton>
                    </IonFab>
                    <AddRecipe edit={this.state.edit} isOpen={this.state.showModal} onClose={this.onModalClose} initData={this.state.selectedRecipe}/>
                    <RecipeDetail isOpen={this.state.detailModal} onClose={this.closeRecipe}
                                  initData={this.state.selectedRecipe} onEdit={this.onEditRecipe}/>
                    {this.renderRecipeList()}
                </IonContent>
            </IonPage>
        );
    }
}

export default Recipes;
