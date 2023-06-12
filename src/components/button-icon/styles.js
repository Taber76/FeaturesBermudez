import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/index";

export const styles = StyleSheet.create({
  buttonContainer: {
    height: 40,
    borderRadius: 15,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  text: {
    color: COLORS.text,
    fontSize: 20,
    fontFamily: "Rubik-Bold",
  },
});
