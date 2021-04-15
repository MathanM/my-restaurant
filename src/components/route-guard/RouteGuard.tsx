import React from "react";
import { useHistory } from "react-router-dom";

const RouteGuard: React.FC<any> = (props) => {
    const history = useHistory();
    function checkAuthentication(){
        if(props.auth){
            return props.children
        }else{
            history.push('/login');
            return null;
        }
    }
    return checkAuthentication();
};

export default RouteGuard;
