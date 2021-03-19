import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Switch } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'; // lib installed by default when we create a proj with expo
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Card from "./app/components/Card";
import AccountScreen from "./app/screens/AccountScreen";
import Icon from "./app/components/Icon";

import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import ListItem from "./app/components/lists/ListItem";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

/*
const categories = [
  { label: "Furniture", value: 1},
  { label: "Clothings", value: 2},
  { label: "Cameras", value: 3},
]
*/

export default function App() {
  //const [category, setCategory] = useState(categories[0]);
  return (
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
  <ListingEditScreen />
 );
}



