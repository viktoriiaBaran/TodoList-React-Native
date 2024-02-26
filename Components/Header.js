import {StyleSheet, View, Text} from 'react-native';
import React from "react";

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Todo List</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        padding: 30,
        backgroundColor: "silver"
    },
    text: {
        fontWeight: "bold",
        fontSize: 18,
        color: "red",
        textAlign: "center"
    }
});
