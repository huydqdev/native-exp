import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        try {
            await auth().signInWithEmailAndPassword(email, password);
            // Optionally, you can fetch user data from the database here
            const userId = auth()?.currentUser?.uid;
            const userData = await database().ref(`/users/${userId}`).once('value');
            console.log(userData.val());
        } catch (error: any) {
            setErrorMessage(error?.message);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    error: {
        color: 'red',
        marginBottom: 12,
    },
});

export default Login;
