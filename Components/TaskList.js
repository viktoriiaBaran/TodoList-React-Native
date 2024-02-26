import React, {useState} from "react";
import {Text, StyleSheet, View, TextInput, Button} from "react-native";

export default function TodoList() {
    const [tasks, setTask] = useState([]);
    const [taskName, setTaskName] = useState("");

    const onChange = () => {
        setTaskName(taskName);
    }

    const HandleAddTask = () => {
        
    }

    return (
        <View>
            <TextInput onChangeText={onChange} value={taskName} placeholder="Enter task"/>
            <Button onPress={HandleAddTask} title="Add task" />
        </View>
    );
}

const styles = StyleSheet.create({

});
