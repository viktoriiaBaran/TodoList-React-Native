import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function TaskItem({ task, HandleDeleteTask }) {
    const { id, name } = task;

    const handleRemoveTask = () => {
        HandleDeleteTask(id);
    };

    return (
        <View style={styles.taskItem}>
            <Text style={styles.taskItemText}>{name}</Text>
            <Button color="#ff4d4d" onPress={handleRemoveTask} title="Delete" />
        </View>
    );
}

const styles = StyleSheet.create({
    taskItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
        padding: 10,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    taskItemText: {
        marginRight: 10,
        fontSize: 18,
    },
});
