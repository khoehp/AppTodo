import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import style from "./style";

const Form = (props) => {
  const [task, setTask] = useState("");
  const handleAddTask = () => {
    if (task.length === 0) {
      alert("Vui lòng nhập công việc!");
      return false;
    }
    props.onAddTask(task);
    setTask("");
    Keyboard.dismiss();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
      style={style.addTask}
    >
      <TextInput
        value={task}
        placeholder="Vui lòng nhập:"
        style={style.input}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={style.item}>
          <Text style={style.content}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Form;
