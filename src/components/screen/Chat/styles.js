import { StyleSheet } from "react-native";
import { colors, fonts, metrics } from "../../../styles";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  headerBar: {
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    borderColor: colors.regular,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  headerTitle: {
    color: colors.black,
    fontSize: fonts.extra,
    fontWeight: "500"
  },
  wrapperChat: {
    flex: 1,
    padding: metrics.basePadding,
    borderColor: colors.regular,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingLeft: metrics.basePadding
  },
  nameText: {
    fontSize: fonts.large
  }
});

export default styles;
