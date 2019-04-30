import { StyleSheet } from "react-native";
import { colors, fonts, metrics } from "../../../styles";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  background: {
    width: "100%",
    height: "100%"
  },
  headerBar: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    borderColor: colors.regular,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: "center"
  },
  headerTitle: {
    color: colors.black,
    fontSize: fonts.large,
    fontWeight: "500",
    marginLeft: metrics.doubleBasePadding
  },
  wrapperList: {
    flex: 1
  },
  wrapperInput: {
    padding: metrics.basePadding,
    flexDirection: "row",
    backgroundColor: colors.ligther,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.regular,
    alignItems: "center"
  },
  input: {
    flex: 1,
    height: 35,
    borderWidth: 1,
    borderColor: colors.regular,
    borderRadius: 20,
    fontSize: fonts.medium,
    paddingLeft: metrics.basePadding,
    paddingRight: metrics.basePadding
  },
  icon: {
    height: 35,
    width: 35,
    padding: metrics.smallPadding,
    marginLeft: metrics.smallMargin,
    backgroundColor: colors.tintColor,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "space-between"
  },
  listView: {
    padding: metrics.basePadding
  },
  sendMsg: {
    alignItems: "flex-end",
    marginTop: metrics.smallMargin,
    marginBottom: metrics.smallMargin,
    marginLeft: 40
  },
  sendText: {
    fontSize: fonts.regular,
    color: colors.white,
    padding: metrics.basePadding,
    backgroundColor: colors.msgSend,
    borderRadius: metrics.baseRadius,
    elevation: 1
  },
  receiveMsg: {
    alignItems: "flex-start",
    marginTop: metrics.smallMargin,
    marginBottom: metrics.smallMargin,
    marginRight: 40
  },
  receiveText: {
    fontSize: fonts.regular,
    color: colors.black,
    padding: metrics.basePadding,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    elevation: 1
  }
});

export default styles;
