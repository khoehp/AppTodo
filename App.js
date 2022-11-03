import { Text, View, ScrollView, Alert } from "react-native";
import Task from "./components/Task";
import Form from "./components/Form";
import styles from "./Style";
import { useState } from "react";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };
  const handleDeleteTask = (index) => {
    Alert.alert("Thong bao", "Ban chac chan muon xoa?", [
      {
        text: "Xoa",
        onPress: () => {
          let taskListTemp = [...taskList];
          taskListTemp.splice(index, 1);
          setTaskList(taskListTemp);
        },
      },
      { text: "cancel", onPress: () => {} },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Quản lý công việc</Text>
        <ScrollView>
          {taskList.map((text, index) => {
            return (
              <Task
                key={index}
                title={text}
                number={index + 1}
                deleteTask={() => handleDeleteTask(index)}
              />
            );
          })}
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}
