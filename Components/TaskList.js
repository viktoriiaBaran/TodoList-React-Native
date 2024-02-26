import React, {useState} from "react";
import {Text, StyleSheet, View, TextInput, Button} from "react-native";
import TaskItem from "./TaskItem";

export default function TaskList() {
    const [tasks, setTask] = useState([]);
    const [taskName, setTaskName] = useState("");

    const HandleAddTask = () => {
        if(taskName) {
            const newTask = {
                id: new Date().getTime(),
                name: taskName,
                completed: false
            }
            const newList = [newTask, ...tasks]
            setTask(newList);
            setTaskName("");
        }
    }

    const HandleDeleteTask = (id) => {
        const newList = tasks.filter(( task ) => task.id !== id);
        setTask(newList);
    }

    const HandleOnToggle = (id) => {
        const newTaskList = tasks.map(( task ) => {
            if(task.id === id){
                return {
                    ...task,
                    completed: !task.completed
                }
            }
            return task;
        })
        setTask(newTaskList);
    }

    const handleChangeText = (text) => {
        setTaskName(text);
    };

    return (
        <View style={styles.taskList}>
            <TextInput style={styles.addTaskInput} onChangeText={handleChangeText} value={taskName} placeholder="Enter task"/>
            <Button color="#4caf50" onPress={HandleAddTask} title="Add task" />
            {tasks.length === 0 ? (
                <Text style={styles.taskListTitle}>No tasks to display</Text>
            ) : (
                <>
                    {tasks.map(( task ) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            HandleDeleteTask={HandleDeleteTask}
                            HandleOnToggle={HandleOnToggle}
                        />
                    ))}
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    taskList: {
        margin: 20,
        maxWidth: 500,
        padding: 20,
        backgroundColor: "#f2f2f2",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    taskListTitle: {
        fontStyle: "italic",
        color: "gray"
    },
    addTaskInput: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        fontSize: 18,
    },
    addTaskButton: {

    }
});
