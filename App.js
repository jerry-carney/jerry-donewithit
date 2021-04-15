import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import AppNavigator from "./app/navigation/AppNavigator";
import AuthContext from "./app/auth/context";
import AuthNavigator from "./app/navigation/AuthNavigator";
import authStorage from "./app/auth/storage";
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";


export default function App() {
    const [user, setUser] = useState();
    const [isReady, setIsReady] = useState(false);

    restoreUser = async () => {
      try {
        const user = await authStorage.getUser();
        console.log("******App.js: user: ", user);
        if (user) setUser(user);
      } catch(error) {
        console.log("App.js: ERROR: ", error);
      }
    }

  if (! isReady) 
    return (<AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={console.warn()} />);

  return(
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );  
}
