import { StyleSheet, Platform } from "react-native";
import { colors, fonts, metrics } from "../../../styles";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  headerBar: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    borderColor: colors.regular,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerTitle: {
    color: colors.black,
    fontSize: fonts.large,
    fontWeight: "500"
  },
  buttonText: {
    color: colors.tintColor,
    fontSize: fonts.input
  },
  input: {
    height: 40,
    color: colors.black,
    fontSize: fonts.input,
    margin: metrics.doubleBaseMargin,
    borderBottomColor: colors.black,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  notificationWrapper: {
    ...Platform.select({
      ios: {
        position: "absolute",
        bottom: 0,
        zIndex: 9
      }
    })
  }
});

export default styles;
