
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
import './Ingredients.css';
import {add, stopwatchOutline} from "ionicons/icons";
import React from "react";
import AddRecipe from "../../components/add-recipe-modal/AddRecipe";
import {Ingredient, IngredientModel, Preparation } from "../../models/recipe.model";
import RecipeDetail from "../../components/recipe-detail-modal/RecipeDetail";
import {API, graphqlOperation} from "aws-amplify";
import {createRecipe, updateRecipe, createIngredient, updateIngredient} from "../../graphql/mutations";
import {listRecipes, listIngredients} from "../../graphql/queries";
import {ListIngredientsQuery, ListRecipesQuery} from "../../API";
import {RecipeItem, RecipeItems} from "../../models/graphql.model";
import {createIngredients} from "../../services/api.service";
import {imageKitUrl, loaderImg} from "../../models/constant";
import AddEditIngredient from '../../components/add-edit-ingredient-modal/AddEditIngredient';

type IngredientState = {
  showModal: boolean;
  detailModal: boolean;
  ingredientList: any;
  selectedIngredient: IngredientModel | undefined;
  edit: boolean;
}

class Ingredients extends React.Component<any, IngredientState> {
  constructor(props: any) {
      super(props);
      this.state = {
          edit: false,
          detailModal: false,
          showModal: false,
          ingredientList: [],
          selectedIngredient: undefined
      };
  }

  onModalClose = (data?: IngredientModel) => {
      this.setState({showModal: false, edit: false});
      if (data) {
          if(this.state.edit){
              this.editingredient(data);
          }else{
              this.createIngredient(data);
          }
      }

  }
  async editingredient(data: IngredientModel){
      const result: any = await API.graphql(graphqlOperation(updateIngredient, {
          input: {
              id: data.id,
              name: data.name,
              label: data.label.join(" "),
              imageUrl: data.imageUrl
          }
      }));
  }
  async createIngredient(data: IngredientModel){
      const result: any = await API.graphql(graphqlOperation(createIngredient, {
          input: {
              name: data.name,
              label: data.label.join(" "),
              imageUrl: data.imageUrl
          }
      }));
  }

  componentDidMount() {
      this.getIngredientList();
  }

  async getIngredientList() {
      const result = (await API.graphql(graphqlOperation(listIngredients, {
          // filter: {status: {eq: "approved"}},
          limit: 50
      }))) as { data: ListIngredientsQuery };
      console.log(result);
      let ingredientList: any = result.data.listIngredients?.items;
      this.setState({ingredientList})
  }

  onEditRecipe = () => {
      this.setState({edit: true, showModal: true});
  }

  renderIngredientList() {
      if (this.state.ingredientList && this.state.ingredientList.length > 0) {
          return (
              <div>
                  {this.state.ingredientList.map((recipe: any) => (
                      (recipe && <IonCard className="recipe-card" key={recipe.id} >
                          {recipe.imageUrl && recipe.imageUrl[0] && <img src={imageKitUrl + recipe.imageUrl[0]} alt={recipe.name}/>}
                          <IonCardHeader>
                              <IonCardTitle className="rc-title">{recipe.name}</IonCardTitle>
                              {/* <IonCardSubtitle className="rc-sub-title">
                                  <span>{recipe.cuisine}</span>
                                  <span>
                                      <IonBadge className="rc-badge" color="pink">
                                          <IonIcon className="duration-icon" icon={stopwatchOutline}/>
                                          {recipe.duration}
                                      </IonBadge>
                                  </span>
                              </IonCardSubtitle> */}
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
                      <IonTitle>INGREDIENTS LIST</IonTitle>
                  </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding">
                  <IonFab vertical="top" horizontal="end" edge slot="fixed">
                      <IonFabButton color="violet" onClick={() => this.setState({showModal: true, selectedIngredient: undefined})}>
                          <IonIcon icon={add}/>
                      </IonFabButton>
                  </IonFab>
                  <AddRecipe  />
                  {/* <RecipeDetail isOpen={this.state.detailModal} onClose={this.closeRecipe}
                                initData={this.state.selectedIngredient} onEdit={this.onEditRecipe}/> */}
                  {this.renderIngredientList()}
                  <AddEditIngredient edit={this.state.edit} isOpen={this.state.showModal} onClose={this.onModalClose} initData={this.state.selectedIngredient} />
              </IonContent>
          </IonPage>
      );
  }
}

export default Ingredients;
