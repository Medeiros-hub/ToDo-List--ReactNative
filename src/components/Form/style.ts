import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  form: {
    transform: [{ translateY: -30 }],
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 24,
    marginBottom: 42,
    height: 20,
  },
  input: {
    flex: 1,
    backgroundColor: colors.gray[500],
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    marginRight: 4,
    width: 56,
    height: 56,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-around",
    width: "100%",
    gap: 110,
  },
  infoWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  created: {
    color: colors.blue,
    fontWeight: "bold",
    marginRight: 5,
  },
  completed: {
    color: colors.purple,
    fontWeight: "bold",
    marginRight: 5,
  },
  numbersTask: {
    color: colors.gray[200],
    backgroundColor: colors.gray[400],
    borderRadius: 20,
    width: 25,
    textAlign: "center",
  },
  taskWrapper: {
    width: '100%',
  },
  line: {
    width: "87%",
    height: 1,
    backgroundColor: colors.gray[400],
    marginBottom: 20,
  },
});
