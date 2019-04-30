import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default {
  smallMargin: 5,
  baseMargin: 10,
  mediumMargin: 15,
  doubleBaseMargin: 20,
  smallPadding: 5,
  basePadding: 10,
  doubleBasePadding: 20,
  baseRadius: 5,
  screenWidth: width < height ? width : height, // Permite o uso com o celular virado
  screenHeight: width < height ? height : width // Permite o uso com o celular virado
};
