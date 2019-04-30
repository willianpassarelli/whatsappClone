import { StyleSheet } from "react-native";
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
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerTitle: {
    color: colors.black,
    fontSize: fonts.extra,
    fontWeight: "500"
  },
  icon: {
    marginLeft: metrics.baseMargin
  },
  wrapperContacts: {
    flex: 1,
    padding: metrics.basePadding,
    borderColor: colors.regular,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  nameText: {
    fontSize: fonts.regular
  },
  emailText: {
    fontSize: fonts.medium
  }
});

export default styles;
