import React, {useEffect, useState} from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator"
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";


function ListingsScreen({ navigation }) {
  const getListingApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingApi.request();
  }, []);

  //<ActivityIndicator animating={loading} size="large" color="blue" />
  return (
    <>
      <ActivityIndicator visible={getListingApi.loading}/>
      <Screen style={styles.screen}> 
        {getListingApi.error && (
          <>
            <AppText>Could not retreive the listing</AppText>
            <AppButton title="Retry" onPress={getListingApi.request}/>
          </>
        )}
        <FlatList  
          data={getListingApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
