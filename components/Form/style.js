import { StyleSheet } from "react-native";
import color from "../../contains/color";
const style = StyleSheet.create({
  addTask: {
    bottom: 30,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: 44,
    width: "80%",
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.primary,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  item: {
    width: 44,
    height: 44,
    backgroundColor: color.primary,
    alignItems: "center",
    justifyContent: "center",
    borderColor: color.background,
    borderRadius:44,
    borderWidth: 2,
  },
  content: {
    fontSize: 24,
    color: color.white,
  },
});
export default style;
