import { StyleSheet, Platform } from "react-native";
import { colors, fonts, metrics } from "../../styles";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: metrics.basePadding
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  text: {
    fontSize: fonts.input,
    color: colors.white,
    backgroundColor: colors.backgroundText.backgroundColor
  },
  headerTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: fonts.large,
    color: colors.white,
    backgroundColor: colors.backgroundText.backgroundColor
  },
  button: {
    height: 40,
    alignSelf: "stretch",
    marginTop: metrics.baseMargin,
    backgroundColor: colors.secundary,
    borderRadius: metrics.baseRadius,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: colors.white,
    fontSize: fonts.input,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    width: "100%",
    color: colors.white,
    fontSize: fonts.input,
    marginTop: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
    borderBottomColor: colors.white,
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
