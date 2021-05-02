import './IngredientTable.css';
import React from "react";
import {IonAvatar, IonIcon, IonInput} from "@ionic/react";
import {Ingredient} from "../../models/recipe.model";
import {closeOutline} from "ionicons/icons";

type IngTable = {
    ingredients: Ingredient[],
    edit?: boolean,
    onIngredientUpdate?: any,
    onIngredientRemove?: any,
}
const IngredientTable: React.FC<IngTable> = ({ingredients, edit, onIngredientUpdate, onIngredientRemove}) => {
    return (
        <table className="table table-style-1">
            <thead>
            <tr>
                <th colSpan={2}/>
                <th className="tc">quantity</th>
            </tr>
            </thead>
            <tbody>
            {ingredients.map((item: any, index: number) => (
                <tr key={index}>
                    <td className="tc" width="60px">
                        <IonAvatar>
                            <img className="ing-img" src={item.imageUrl} alt={item.name}/>
                        </IonAvatar>
                    </td>
                    <td>{item.name}</td>
                    {edit?
                        <td className="tc" width="130px">
                            <IonInput value={item.quantityInput} className="mini-input vm"
                                      onIonChange={e => onIngredientUpdate(e.detail.value!, item)}/>
                            <div className="ing-remove" onClick={() => onIngredientRemove(item, index)}>
                                <IonIcon icon={closeOutline}/>
                            </div>
                        </td> :
                        <td className="tc" width="90px">
                            {item.quantity} {item.quantityUnit}
                        </td>
                    }
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default IngredientTable;
