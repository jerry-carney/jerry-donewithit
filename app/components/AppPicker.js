import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from './AppText';
import colors from '../config/colors';
import PickerItem from './PickerItem';


function AppPicker({
    icon,
    items,
    onSelectItem,
    numberOfColumns=1,
    PickerItemComponent=PickerItem,
    placeholder,
    selectedItem,
    width="100%" }) {
    const [modalVisable, setModalVisable] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisable(true)}>
                <View style={[styles.container, {width}]}>
                    {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={colors.medium} />}
                    <AppText style={styles.text}> {selectedItem ? selectedItem.label : placeholder} </AppText>
                    <MaterialCommunityIcons name="chevron-down" size={20} color={colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisable} animationType="slide">
                <Button title="Close" onPress={() => setModalVisable(false)}/>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({ item }) => 
                        <PickerItemComponent
                            item={item}
                            label={item.label}
                            onPress={() => {
                                setModalVisable(false);
                                onSelectItem(item);
                            }}
                        />         
                    }
                />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        color: colors.medium,
        flex: 1,
    },
  });

export default AppPicker;