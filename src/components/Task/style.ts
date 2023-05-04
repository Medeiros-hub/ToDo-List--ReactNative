import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  task: {
    width: "88%",
    backgroundColor: colors.gray[500],
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  content: {
    color: "#fff",
    marginHorizontal: 40,
  },
  completed: {
    color: colors.gray[300],
    marginHorizontal: 40,
    textDecorationLine: "line-through",
  },
  confirmButton: {
    position: "absolute",
    left: 20,
  },
  deleteButton: {
    position: "absolute",
    width: 30,
    right: 20,
  },
});
