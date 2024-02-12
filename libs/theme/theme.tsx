import { createTheme } from "@shopify/restyle";
import { Platform } from "react-native";
import { screenWidth } from "@constant/utils";

const globalPallete = {};
import { FlexAlignType } from "react-native";


export const FONT = {
  PrimaryExtraLight: "Metropolis-ExtraLight", // 200
  PrimaryLight: "Metropolis-Light", // 300
  // Primary: 'Metropolis-Regular', // 400
  Primary: "Metropolis-Medium", // 500
  PrimarySemiBold: "Metropolis-SemiBold", // 600
  PrimaryBold: "Metropolis-Bold", // 700
  PrimaryHeavy: "Metropolis-Black", // 900
};

export const theme = createTheme({
  backgroundColor: "#ffffff",
  colors: {
    background: "#0a0a0a",
    white: "#FFFFFF",
    primary: "#9168F6",
    backgroundGradient:'rgba(18, 18, 18, 1)',
    primaryGradient:"rgba(145, 104, 246, 1)",
    lightGreen: "#C1E7BB",
    veryLightGreen: "#EAF9E7",
    lightGreenText: "#C0E2BA",
    backgroundGreen: "#DEF4DB",
    lightText: "#272727",
    lightBlueBg: "#E4F3FF",
    lightGreyText: "#33404F",
    greyText: "#9AADC7",
    darkBlueText: "#023373",
    black: "#000000",
    darkHeading: "#9AADC7",
    darkBlueHeading: "#033373",
    shadowLight: "#474747",
    red: "#FF6134",
    borderGrey: "#DADADA",
    lightYellow: "#FFF1C3",
    yellow: "#F79321",
    lightBlack: "#333333",
    blue: "#BFE3FF",
    lightGreenBackground: "#E9F3ED",
    lightBlueBackground: "#CCE3F5",
    blueTopTabLabelBg: "#D3E9F4",
    lightGrey: "#999999",
    border: "#E6E6E6",
    disabled: "#E6E6E6",
    lightBlue: "#E9F5FF",
    lightGreenDropDown: "#D8F3D4",
    snowy: "#F1F1F1",
    grey: "#7C7C7C",
    lightBlueBorder: "#D6EAFB",
    lightRed: "#FFEDED",
    lightGreenQuestionBg: "#F6FAF7",
    orange: "#FEAF00",
    ultraLightGreen: "#F6FAF6",
    inputGrey: "#F5F5F5",
    orangeText: "#F79321",
    darkText: "#00313A",
    textInputBg: "#292929",
    textInputLightBG:'#454545',
    progressBarBg: "#acacac",
    ...globalPallete,
  },
  spacing: {
    // new
    s0: 0,
    s2: 2,
    s4: 4,
    s3: 3,
    s6: 6,
    s7: 7,
    s8: 8,
    s10: 10,
    backButtonPadding: 10,
    s12: 10,
    s14: 14,
    s16: 16,
    s18: 18,
    s20: 20,
    s24: 24,
    s28: 28,
    s30: 30,
    s32: 32,
    s34: 34,
    s36: 36,
    s38: 38,
    s48: 48,
    s40: 40,
    s54: 54,
    s75: 75,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  breakpoints: {},
  textVariants: {
    // new
   
    light10:{
      fontSize: 10,
      fontFamily: FONT.PrimaryLight,      
      color: "white",
    },
    light12:{
      fontSize: 12,
      fontFamily: FONT.PrimaryLight,      
      color: "white",
    },
    light14:{
      fontSize: 14,
      fontFamily: FONT.PrimaryLight,      
      color: "white",
    },
    light16:{
      fontSize: 16,
      fontFamily: FONT.PrimaryLight,      
      color: "white",
    },
    light18:{
      fontSize: 18,
      fontFamily: FONT.PrimaryLight,      
      color: "white",
    },
    light36:{
      fontSize: 36,
      fontFamily: FONT.PrimaryLight,      
      color: "white",
    },
    regular10: {
      fontSize: 10,
      fontFamily: FONT.Primary,
      color: "white",
    },
    regular10Lightblack: {
      fontSize: 10,
      fontFamily: FONT.Primary,
      color: "white",
    },
    regular12Lightblack: {
      fontSize: 12,
      fontFamily: FONT.Primary,
      color: "white",
    },
    regular12: {
      fontSize: 12,
      fontFamily: FONT.Primary,
      color: "white",
    },
    regular12LightBlack: {
      fontSize: 12,
      fontFamily: FONT.Primary,
      color: "white",
    },
    regular12Grey: {
      fontSize: 12,
      fontFamily: FONT.Primary,
      color: "white",
    },
    regular14: {
      fontSize: 14,
      fontFamily: FONT.Primary,
      color: "white",
    },
    regular14LightBlack: {
      fontSize: 14,
      fontFamily: FONT.Primary,
      color: "white",
    },
    regular14LightGrey: {
      fontSize: 14,
      fontFamily: FONT.Primary,
      color: "lightGrey",
    },
    regular16: {
      fontSize: 16,
      fontFamily: FONT.Primary,
      color: "white",
    },
    regular16LightBlack: {
      fontSize: 16,
      fontFamily: FONT.Primary,
      color: "lightBlack",
    },
    regular18: {
      fontSize: 18,
      fontFamily: FONT.Primary,
      color: "darkText",
    },
    semiBold9: {
      fontSize: 9,
      fontFamily: FONT.PrimarySemiBold,
      color: "darkBlueText",
    },
    semiBold12: {
      fontSize: 12,
      fontFamily: FONT.PrimarySemiBold,
      color: "darkBlueText",
    },
    bottomTabText: {
      fontSize: 10,
      fontFamily: FONT.PrimarySemiBold,
      color: "darkBlueText",
    },
    semiBold12DarkText: {
      fontSize: 12,
      fontFamily: FONT.PrimarySemiBold,
      color: "darkText",
    },
    semiBold12LightBlack: {
      fontSize: 12,
      fontFamily: FONT.PrimarySemiBold,
      color: "lightBlack",
    },
    semiBold10: {
      fontSize: 10,
      fontFamily: FONT.PrimarySemiBold,
      color: "darkBlueText",
    },
    semiBold16: {
      fontSize: 16,
      fontFamily: FONT.PrimarySemiBold,
      color: "white",
    },
    semiBold18: {
      fontSize: 18,
      fontFamily: FONT.PrimarySemiBold,
      color: "darkBlueText",
    },
    semiBold24: {
      fontSize: 24,
      fontFamily: FONT.PrimarySemiBold,
      color: "darkBlueText",
    },
    semiBold14: {
      fontSize: 14,
      fontFamily: FONT.PrimarySemiBold,
      color: "darkBlueText",
    },
    semiBold14Green: {
      fontSize: 14,
      fontFamily: FONT.PrimarySemiBold,
      color: "green",
    },
    bold8: {
      fontSize: 8,
      fontFamily: FONT.PrimaryBold,
      color: "darkText",
    },
    bold10: {
      fontSize: 10,
      fontFamily: FONT.PrimaryBold,
      color: "darkText",
    },
    bold12: {
      fontSize: 12,
      fontFamily: FONT.PrimaryBold,
      color: "darkText",
    },
    bold14: {
      fontSize: 14,
      fontFamily: FONT.PrimaryBold,
      color: "darkText",
    },
    bold20: {
      fontSize: 20,
      fontFamily: FONT.PrimaryBold,
      color: "darkText",
    },
    bold20DarkBlue: {
      fontSize: 20,
      fontFamily: FONT.PrimaryBold,
      color: "darkBlueText",
    },
    bold24: {
      fontSize: 24,
      fontFamily: FONT.PrimaryBold,
      color: "darkText",
      fontWeight: "700",
    },
    bold14LightBlack: {
      fontSize: 14,
      fontFamily: FONT.PrimaryBold,
      color: "lightBlack",
    },
    semiBold14LightBlack: {
      fontSize: 14,
      fontFamily: FONT.PrimaryBold,
      color: "lightBlack",
    },
    bold14Green: {
      fontSize: 14,
      fontFamily: FONT.PrimaryBold,
      color: "green",
    },
    bold16: {
      fontSize: 16,
      fontFamily: FONT.PrimaryBold,
      color: "white",
    },
    bold16Green: {
      fontSize: 16,
      fontFamily: FONT.PrimaryBold,
      color: "green",
    },
    bold16DarkBlue: {
      fontSize: 16,
      fontFamily: FONT.PrimaryBold,
      color: "darkBlueText",
    },
    bold16LightBlack: {
      fontSize: 16,
      fontFamily: FONT.PrimaryBold,
      color: "darkText",
    },
    bold18: {
      fontSize: 18,
      fontFamily: FONT.PrimaryBold,
      color: "darkText",
      // fontWeight: '700',
    },
    bold18LightBlack: {
      fontSize: 18,
      fontFamily: FONT.PrimaryBold,
      color: "lightBlack",
    },
    darkBlueBold18: {
      fontSize: 18,
      fontFamily: FONT.PrimaryBold,
      color: "darkBlueText",
    },
    bold22: {
      fontSize: 22,
      fontFamily: FONT.PrimaryBold,
      color: "darkText",
    },
    bold28: {
      fontSize: 28,
      fontFamily: FONT.PrimaryBold,
      color: "white",
    },
    bold40: {
      fontSize: 40,
      fontFamily: FONT.PrimaryBold,
      color: "darkText",
    },
    bold32: {
      fontSize: 32,
      fontFamily: FONT.PrimaryBold,
      color: "white",
    },
    bold36: {
      fontSize: 36,
      fontFamily: FONT.PrimaryBold,
      color: "white",
    },
    normal: {
      fontSize: 14,
      fontFamily: FONT.Primary,
      color: "black",
    },
    onBoardingText: {
      fontSize: 32,
      // fontFamily: FONT.PrimaryBold,
      color: "darkText",
      textAlign: "center",
      paddingTop: "s40",
      lineHeight: 34,
    },
  },
  cardVariants: {
    default: {
      shadowOpacity: 0.2,
      backgroundColor: "background",
      shadowColor: "shadowLight",
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 8,
      borderRadius: 6,
      elevation: 5,
    },
    light: {
      shadowOpacity: 0.1,
      backgroundColor: "background",
      shadowColor: "shadowLight",
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 2,
      borderRadius: 3,
      elevation: 2,
    },
    dark: {
      shadowOpacity: 0.5,
      backgroundColor: "background",
      shadowColor: "shadowLight",
      shadowOffset: { width: 2, height: 2 },
      shadowRadius: 5,
      borderRadius: 6,
      elevation: 2,
    },
    optimizedDark: {
      shadowOpacity: 0.5,
      backgroundColor: "background",
      shadowColor: Platform.select({
        android: "black",
        ios: "black",
      }),
      shadowOffset: { width: 2, height: 2 },
      shadowRadius: 5,
      borderRadius: 6,
      elevation: 20,
    },
    optimizedLight: {
      shadowOpacity: 0.04,
      shadowColor: Platform.select({
        android: "black",
        ios: "black",
      }),
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 4,
      borderRadius: 8,
      elevation: 10,
    },
    optimizedLightBlue: {
      shadowOpacity: 1,
      backgroundColor: "background",
      shadowColor: Platform.select({
        android: "primaryDark",
        ios: "blueLightBackground",
      }),
      shadowOffset: { width: 0, height: 8 },
      shadowRadius: 20,
      borderRadius: 10,
      elevation: 20,
    },
    whiteWithBorder: {
      borderColor: "border",
      borderWidth: 1,
      borderRadius: 8,
      padding: "s16",
    },
    textInput: {
      backgroundColor: "#292929",
      color:"#fff",
      height: 54,      
      alignSelf:"stretch" as FlexAlignType,
      borderRadius: 8,
      paddingLeft: 16,
      fontSize: 16,
      fontFamily: FONT.Primary,
    },
  },
});

export type Theme = typeof theme;

export const lightTheme: Theme = {
  ...theme,
};
