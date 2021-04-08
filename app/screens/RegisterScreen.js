import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, ErrorMessage, SubmitButton }  from '../components/forms';
import ActivityIndicator from "../components/ActivityIndicator";
import Screen from '../components/Screen';
import authApi from '../api/auth';
import useAuth from "../auth/useAuth";
import usersApi from "../api/users";
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);
    const auth = useAuth();
    const [error, setError] = useState();

    const handleSubmit = async (userInfo) => {
        const response = await registerApi.request(userInfo);
        if (! response.ok) {
            if (response.data) setError(response.data.error);
            else {
                setError("An unexpected internal error occurred.");
                console.log(response);
            }
            return;
        }
        
        const { data: authToken } = await loginApi.request(userInfo.email, userInfo.password);
        auth.logIn(authToken);
    }

    return (
        <>
            <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
            <Screen style={styles.container}>     
                <AppForm
                    initialValues={{ name: "", email: "", password: "" }}
                    onSubmit={ handleSubmit }
                    validationSchema={validationSchema}
                >
                    <ErrorMessage error={error} visible={error} />
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
        </>
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