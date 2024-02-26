import {StyleSheet, View,} from 'react-native';
import React from "react";
import Header from "./Components/Header";
import TaskList from './Components/TaskList'

export default function App() {

  return (
      <View style={styles.app}>
        <Header />
        <TaskList />
      </View>
  );
}

const styles = StyleSheet.create({
    app: {
        textAlign: "center"
    }
});
