import React from "react";

export const UserContext = React.createContext({
    isAuthenticated: false,
    setIsAuthenticated: (auth: boolean) => {}
});
UserContext.displayName = 'UserContext'
