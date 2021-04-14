import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import {useLocation} from 'react-router-dom';
import {business, businessOutline, clipboard, clipboardOutline, moonOutline, sunnyOutline} from 'ionicons/icons';
import './Menu.css';
import React, {useState} from "react";
import {Plugins} from '@capacitor/core';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'SHOPS',
    url: '/home',
    iosIcon: businessOutline,
    mdIcon: business
  },
  {
    title: 'RECIPE LIST',
    url: '/recipes',
    iosIcon: clipboardOutline,
    mdIcon: clipboard
  },
];

const Menu: React.FC = () => {
  const location = useLocation();
  const { Storage } = Plugins;
  const [themeFlag, setThemeFlag] = useState(false);
  Storage.get({key: 'theme'}).then((data)=>{
    setThemeFlag(data.value === 'true');
  });
  const toggleTheme = () => {
    setThemeFlag((theme: boolean) => {
      const flag: boolean = !theme;
      Storage.set({key: 'theme', value: flag.toString()});
      document.body.classList.toggle('dark', flag);
      return flag;
    });
  }
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="menu-list">
          <IonListHeader>
            MY RESTAURANT
            <IonButton className="dark-btn" onClick={toggleTheme}>
              <IonIcon slot="icon-only" icon={themeFlag?sunnyOutline:moonOutline}/>
            </IonButton>
          </IonListHeader>
          <IonNote>some@email.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
