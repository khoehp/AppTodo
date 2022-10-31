import { Text, View } from "react-native";
import Task from "./components/Task";
import styles from "./Style";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Quản lý công việc</Text>
        <Task />
      </View>
      <View style={styles.input}></View>
    </View>
  );
}

