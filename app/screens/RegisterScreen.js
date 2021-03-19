import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton }  from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>        
            <AppForm
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={values => console.log(values) }
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCorrect={false}
                    icon="account"
                    name="name"
                    placeholder="Name"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress" //only works in iOS
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    textContentType="password" //only works in iOS
                />

                <SubmitButton title="Register" />

            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
})

export default RegisterScreen;