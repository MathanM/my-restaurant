import {
  IonBadge,
  IonButton,
  IonButtons,
  IonChip,
  IonContent,
  IonDatetime,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/react';
// import './AddRecipe.css';
import React, {useEffect, useState} from "react";
import {add, arrowBack, checkmarkOutline, refreshOutline, remove} from "ionicons/icons";
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {Ingredient, IngredientModel} from "../../models/recipe.model";
import AddIngredient from "../add-ingredient-modal/AddIngredient";
import IngredientTable from "../ingredient-table/IngredientTable";
import {API, graphqlOperation, Storage} from "aws-amplify";
import {deleteIngredientAmount, updateIngredientAmount} from "../../graphql/mutations";
import {quantityInputConversion, QuantityParams} from "../../services/util.service";
import {createIngredients} from "../../services/api.service";
import {imageKitUrl} from "../../models/constant";


const TagController = ({control, transform, name}: any) => (
  <Controller
      control={control}
      name={name}
      render={({field}) => (
          <IonInput placeholder="Enter comma (,) separated values "
                    onIonChange={e => field.onChange(transform.output(e.detail.value!))}
                    value={transform.input(field.value)}
          />
      )}
  />
);

const AddEditIngredient: React.FC<any> = ({isOpen, onClose, initData, edit}) => {
  const initFormValue: IngredientModel = edit && initData? initData:{
      id: '',
      name: '',
      imageUrl: '',
      label: []
  }
  const initLabel = edit && initData && initData.label ? initData.label : [];
  const [label, setLabel] = useState<string[]>(initLabel);
  const {control, handleSubmit, reset, formState, getValues} = useForm<IngredientModel>({
      defaultValues: initFormValue,
      mode: "onChange",
  });
  const initImgUrl = edit && initData && initData.imageUrl? initData.imageUrl :[];
  const [imgUrlList, setImgUrlList] = useState<string[]>(initImgUrl);
  const [imgDeleteList, setImgDeleteList] = useState<string[]>([]);
  const [newImgFiles, setNewImgFiles] = useState<File[]>([]);
  useEffect(()=>{
      onReset();
  },[edit]);

  const onSubmit: SubmitHandler<any> = (formValue: any) => {
      console.log(formValue);
      const imgUrls: string[] = [];
      const imgBaseName = formValue.name.replace(/\s/g, '-');

      newImgFiles.forEach((img, index) => {
          const imgExt = img.name.split(".").pop();
          const imgName = imgBaseName + (initImgUrl.length+index) + "." + imgExt;
          imgUrls.push(imgName);
          Storage.put(imgName, img, {
              progressCallback(progress: any) {
                  console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
              }
          });
      });
      imgDeleteList.forEach((url) => {
          Storage.remove(url);
      });
      if(imgUrls.length > 0){
          formValue.imageUrl = imgUrls;
      }
      onClose(formValue);
      onReset();
  }

  const onReset = () => {
      setLabel(initLabel);
      setImgUrlList(initImgUrl);
      reset(initFormValue);
      setImgDeleteList([]);
  }

  const getImageUpload = () => {
      return (
          <div>
              <label htmlFor="ar-file" className="ar-upload">Upload Recipe Images</label>
              <input id="ar-file" accept="image/png, image/jpeg" type="file"
                     onChange={(ev) => onFileChange(ev.target.files)}/>
              <div className="ar-img-container">
                  {imgUrlList && imgUrlList.map((img, i) =>
                      <div key={i} className="ar-img">
                          <img src={imageKitUrl+img} alt=""/>
                          <div className="ar-img-close" onClick={() => {onDeleteImg(img, i)}}>&times;</div>
                      </div>
                  )}
                  {newImgFiles && newImgFiles.map((img, i) =>
                      <div key={i} className="ar-img">
                          <img src={URL.createObjectURL(img)} alt=""/>
                          <div className="ar-img-close" onClick={() => {onRemoveImg(i)}}>&times;</div>
                      </div>
                  )}
              </div>
          </div>
      );
  }
  const onFileChange = (files: FileList | null) => {
      if(files){
          setNewImgFiles(state => [...state, ...Array.from(files)]);
      }
  }
  const onRemoveImg = (index: number) => {
      setNewImgFiles(state => {
          const list = [...state];
          list.splice(index, 1);
          return list;
      });
  }
  const onDeleteImg = (url: string, index: number) => {
      setImgUrlList(state => {
          const list = [...state];
          list.splice(index, 1);
          return list;
      });
      setImgDeleteList(state => [...state, url]);
  }
  return (
      <IonModal isOpen={isOpen} cssClass='flexible-modal'>
          <IonHeader>
              <IonToolbar>
                  <IonButtons slot="start">
                      <IonButton color="dark" onClick={() => {
                          onClose()
                      }}>
                          <IonIcon slot="icon-only" icon={arrowBack}/>
                      </IonButton>
                  </IonButtons>
                  <IonTitle>{edit ? "EDIT" : "ADD"} INGREDIENT</IonTitle>
              </IonToolbar>
          </IonHeader>

          <IonContent className="ion-padding ar-content">
              <form onSubmit={handleSubmit(onSubmit)}>
                  <IonList className="form-list">

                      <IonItem lines="none">
                          <IonLabel position="stacked">Name</IonLabel>
                          <Controller
                              name="name"
                              control={control}
                              render={({field}) => <IonInput name="name" value={field.value}
                                                             onIonChange={e => field.onChange(e.detail.value!)}/>}
                              rules={{required: true}}
                          />
                      </IonItem>

                      <IonItem lines="none">
                          <IonLabel position="stacked">Label</IonLabel>
                          <TagController
                              transform={{
                                  input: (value: string[]) => value ? value.join(" ") : "",
                                  output: (e: string) => {
                                      e = e.replace(/,/g, " ")
                                      const label = e.split(" ");
                                      setLabel(label);
                                      return label;
                                  }
                              }}
                              control={control}
                              name="label"
                          />
                      </IonItem>

                      {label && label.length > 0 &&
                      <IonItem className="labelItem" lines="none">{label.map((tag, index) => <IonBadge key={index} className="tag">{tag}</IonBadge>)}</IonItem>}

                      {getImageUpload()}
                  </IonList>
              </form>
          </IonContent>
          <IonFooter id="modal-footer">
              <IonToolbar className="tr">
                  <IonChip color="medium"
                           onClick={() => onReset()}>
                      <IonIcon icon={refreshOutline}/>
                      <IonLabel>RESET</IonLabel>
                  </IonChip>
                  <IonChip onClick={() => onSubmit(getValues())}
                           color="violet">
                      <IonIcon icon={checkmarkOutline}/>
                      <IonLabel>SAVE</IonLabel>
                  </IonChip>
              </IonToolbar>
          </IonFooter>
      </IonModal>
  );
};

export default AddEditIngredient;