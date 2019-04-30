import { Platform } from "react-native";

export default {
  white: "#FFF",
  ligther: "#fcfcfc",
  light: "#DDD",
  regular: "#999",
  dark: "#666",
  darker: "#333",
  black: "#000",
  msgSend: "#3981f7",

  primary: "#eec035",
  secundary: "#3981f7",
  success: "#9DCA83",
  danger: "#d93900",
  tintColor: "#2f66f9",

  transparent: "transparent",
  darkTransparent: "rgba(0,0,0,0.8)",
  whiteTransparent: "rgba(255,255,255, 0.6)",

  backgroundText: {
    ...Platform.select({
      ios: {
        backgroundColor: "transparent"
      }
    })
  }
};
