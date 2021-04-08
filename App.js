/*
import React from 'react';
import { Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from './app/components/Screen';
import AppButton from './app/components/AppButton';

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetDetails")}
    />
  )
}

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1})}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
);

const Account = ({ route }) => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const AccountDetails = ({ route }) => (
  <Screen>
    <Text>Account Details</Text>
  </Screen>
);

// Defining STACK Routes ----- 
const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}>
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{ 
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
      }}
    />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({ title: "Tweet Details" })}

    />
  </Stack.Navigator>
);

// Defining BOTTOM_TAB Routes -----
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    // tabBarOptions={{
    //   activeBackgroundColor: "tomato",
    //   activeTintColor: "white",
    //   inactiveBackgroundColor: "#eee",
    //   inactiveTintColor: "black",
    //}}
  >
    <Tab.Screen
      name="Feed"
      component={StackNavigator}
      options={{ 
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="AccountDetails"
      component={AccountDetails}
    />
  </Tab.Navigator>
);

export default function App(props) {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
*/





import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Button, Switch, ImageBackground} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'; // lib installed by default when we create a proj with expo
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Card from "./app/components/Card";
import AccountScreen from "./app/screens/AccountScreen";
import Icon from "./app/components/Icon";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import ListItem from "./app/components/lists/ListItem";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import styles from "./app/config/styles";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AppText from "./app/components/AppText";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

/*
const categories = [
  { label: "Furniture", value: 1},
  { label: "Clothings", value: 2},
  { label: "Cameras", value: 3},
]
*/
//const image = { uri: 'https://reactjs.org/logo-og.png' };


  /*
  const demo = async () => {
    try {
      await AsyncStorage.setItem('person', JSON.stringify({ id: 1, name: 'Jerry'}));
      const value = await AsyncStorage.getItem('person');
      const person = JSON.parse(value);
      console.log("Person:", person);
    } catch (error) {
      console.log("Async setItem failed: ", error);
    }
  }

  demo();

  const netInfo = useNetInfo();
  return netInfo.isInternetReachable ? <View><AppText>yes</AppText></View> : <View><AppText>yes</AppText></View>;
  */
  //const netInfo = useNetInfo();
  //NetInfo.fetch().then((netInfo) => console.log(netInfo));
  // componentDidMount
  //const unsubscribe = NetInfo.addEventListener(netInfo => console.log(netInfo));

  // componentWillUmount
  //unsubscribe();

  //const [category, setCategory] = useState(categories[0]);
  //return (
  /*
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        items={categories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  */

  /*
  <View style={{
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 75,
  }}>
    <Card
      title="Red jacket for sale"
      subTitle="$100"
      image={require("./app/assets/jacket.jpg")}
    />
  </View>
  */
 
  //<ListingDetailsScreen />
  //<WelcomeScreen />
  //<ViewImageScreen />
  //<MessagesScreen />
  //<AccountScreen />
  //<ListingsScreen />
  //<LoginScreen />
  //<RegisterScreen />
  //<ListingEditScreen />

  export default function App() {
    const [user, setUser] = useState();
    const [isReady, setIsReady] = useState(false);

    restoreUser = async () => {
      const user = await authStorage.getUser();
      if (user) setUser(user);
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

/*
<NavigationContainer theme={navigationTheme}>
<AppNavigator />
</NavigationContainer>
*/



