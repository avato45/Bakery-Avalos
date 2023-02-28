import { 
    StyleSheet, 
    Text, 
    View, 
    KeyboardAvoidingView, 
    TouchableOpacity 
} from 'react-native'
import React from 'react'

import { COLORS } from "../constants/colors"

const AuthScreen = () => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.screen}>
        <View style={styles.container}>
            <Text style={styles.title}>Sign in</Text>
            <Text>Formulary</Text>
            <View style={styles.prompt}>
                <Text style={styles.promptMessage}>Alredy Sign in?</Text>
                <TouchableOpacity onPress={() => console.log("log in")}>
                    <Text style={styles.promptButton}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    </KeyboardAvoidingView>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginBottom: "center",
        textAlign: "center",
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        textAlign: "center",
    },
    container: {
        width: "80%",
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
    },
    prompt: {
        alignItems: "center",
    },
    promptMessage: {
        fontSize: 16,
        color: "#333",
    },
    promptButton: {
        fontSize: 16,
    },
    button: {
        backgroundColor: COLORS.primary,
        marginVertical: 20,
    },
})