import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 9,
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  },
  loaderImage: {
    width: 70,
    height: 70,
    borderRadius: metrics.baseRadius,
    position: "relative",
    left: "50%",
    marginLeft: -35,
    top: "50%",
    marginTop: -35
  },
  loaderContainer: {
    width: 90,
    height: 90,
    backgroundColor: colors.darkTransparent,
    borderRadius: metrics.baseRadius,
    position: "absolute",
    left: "50%",
    top: "50%",
    marginLeft: -45,
    marginTop: -45
  }
});

export default styles;
