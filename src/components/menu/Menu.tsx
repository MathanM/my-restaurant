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

import {withRouter} from 'react-router-dom';
import {business, businessOutline, clipboard, clipboardOutline, moonOutline, sunnyOutline} from 'ionicons/icons';
import './Menu.css';
import React from "react";
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
  {
    title: 'INGREDIENT LIST',
    url: '/ingredients',
    iosIcon: clipboardOutline,
    mdIcon: clipboard
  },
];
type ThemeState = {
  dark: boolean;
}
const { Storage } = Plugins;

class Menu extends React.Component<any, ThemeState> {
  componentDidMount() {
    Storage.get({key: 'theme'}).then((data) => {
      const flag: boolean = data.value === 'true';
      this.setTheme(flag)
      this.setState({dark: flag});
    });
  }

  toggleTheme = () => {
    this.setState((state: ThemeState) => {
      const flag: boolean = !state.dark;
      Storage.set({key: 'theme', value: flag.toString()});
      this.setTheme(flag);
      return { dark: flag };
    });
  }
  setTheme(flag: boolean){
    document.body.classList.toggle('dark', flag);
  }
  render() {
    const { location } = this.props;
    return (
        <IonMenu contentId="main" type="overlay">
          <IonContent>
            <IonList id="menu-list">
              <IonListHeader>
                MY RESTAURANT
                <IonButton color="violet" className="dark-btn" onClick={this.toggleTheme}>
                  <IonIcon slot="icon-only" icon={this.state?.dark ? sunnyOutline : moonOutline}/>
                </IonButton>
              </IonListHeader>
              <IonNote>some@email.com</IonNote>
              {appPages.map((appPage, index) => {
                return (
                    <IonMenuToggle key={index} autoHide={false}>
                      <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url}
                               routerDirection="none" lines="none" detail={false}>
                        <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon}/>
                        <IonLabel>{appPage.title}</IonLabel>
                      </IonItem>
                    </IonMenuToggle>
                );
              })}
            </IonList>
          </IonContent>
        </IonMenu>
    );
  }
}

export default withRouter(Menu);
