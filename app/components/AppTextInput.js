import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors';
import defaultStyles from '../config/styles';

function AppTextInput({ icon, width="100%", ...otherProps }) {
    return (
        <View style={[styles.container, {width}]}>
            {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={colors.medium} />}
            <TextInput placeholderTextColor={colors.medium} style={defaultStyles.text} {...otherProps} />
        </View>
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
  });

export default AppTextInput;