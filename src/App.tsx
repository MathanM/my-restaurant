import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Home from './pages/home/Home';
import Recipes from "./pages/recipes/Recipes";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './App.css';
import Login from "./pages/login/Login";
import RouteGuard from "./components/route-guard/RouteGuard";
import React, {useState} from "react";
import { UserContext } from "./contexts/user.context";
const App: React.FC = () => {


  const [isAuthenticated, setIsAuthenticated]= useState(false);
  const context = { isAuthenticated, setIsAuthenticated }
  return (
    <IonApp>
      <IonReactRouter>
        <UserContext.Provider value={context}>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/login" />
            </Route>
            <Route path="/login" exact={true}>
              <Login />
            </Route>
            <RouteGuard auth={isAuthenticated}>
              <Route path="/home" exact={true}>
                <Home />
              </Route>
              <Route path="/recipes" exact={true}>
                <Recipes />
              </Route>
            </RouteGuard>
          </IonRouterOutlet>
        </IonSplitPane>
        </UserContext.Provider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
