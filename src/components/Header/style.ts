import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.gray[700],
        width: '100%',
        height: 173,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        height: 30,
        resizeMode: "contain"
    }
})