import { StyleSheet } from "react-native";
import { colors, fonts, metrics } from "../../styles";

const styles = StyleSheet.create({
  wrapper: {
    height: 60,
    width: "100%",
    padding: metrics.basePadding,
    backgroundColor: colors.ligther,
    borderColor: colors.regular,
    borderTopWidth: StyleSheet.hairlineWidth
  },
  notificationContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
  errorText: {
    marginRight: metrics.smallMargin,
    fontSize: fonts.regular,
    marginBottom: 2
  },
  errorMessage: {
    marginBottom: 2,
    fontSize: fonts.regular
  }
});

export default styles;
