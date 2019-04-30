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
  wrapperLogout: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  }
});

export default styles;
