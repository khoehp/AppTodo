import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
const Task = (props) => {
  const { number } = props;
  const textNumber = number < 10 ? `0${number}` : number;
  return (
    <TouchableOpacity onPress={props.deleteTask}>
      <View style={styles.item}>
        <View style={styles.square}>
          <Text style={styles.number}>{textNumber}</Text>
        </View>
        <Text style={styles.content}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
