import './Login.css';
import React, {useContext, useEffect, useState} from "react";
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import { useHistory } from "react-router-dom";
import {UserContext} from "../../contexts/user.context";

const Login: React.FC = () => {
    const [authState, setAuthState] = useState<AuthState>();
    const [user, setUser] = useState<object | undefined>();
    const history = useHistory();
    const { setIsAuthenticated } = useContext(UserContext);
    useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);
    function getAuthComponent(){
        if(authState === AuthState.SignedIn && user){
            setIsAuthenticated(true);
            history.push("/home");
            return <AmplifySignOut buttonText="Log Out"/>
        }
        return <AmplifyAuthenticator/>
    }
    return getAuthComponent();
};

export default Login;
