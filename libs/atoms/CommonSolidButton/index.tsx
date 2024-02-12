import {
    StyleSheet,
    TextStyle,
    TouchableOpacity,
    TouchableOpacityProps,
    ViewStyle,
  } from "react-native";
  import React from "react";
  import Text from "../text";
  import { theme } from "@theme";
  
  interface ButtonProps {
    title: string;
    onPress: () => void;
    disabledOnPress?: () => void;
    style?: ViewStyle;
    titleStyle?: TextStyle;
    disabled?: boolean;
  }
  
  const CommonSolidButton: React.FC<ButtonProps> = ({
    title,
    onPress,
    disabledOnPress,
    style,
    disabled,
    ...rest
  }) => {
    if (disabled) {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.disabledContainer, style]}
          onPress={disabledOnPress}
        >
          <Text
            variant="bold14"
            color="greyText"
            marginHorizontal="s8"
            
          >
            {title}
          </Text>
        </TouchableOpacity>
      );
    }
  
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.container, style]}
        onPress={onPress}
        {...rest}
      >
        <Text
          variant="bold14"
          color="white"
          marginHorizontal="s8"
          paddingHorizontal="s4"
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  };
  
  export default CommonSolidButton;
  
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: 45,
      backgroundColor: theme.colors.primary,
      borderRadius: theme.spacing.s75,
      justifyContent: "center",
      alignSelf: "center",
      alignItems: "center",
      paddingHorizontal: 8,
    },
    disabledContainer: {
      width: "100%",
      height: 40,
      backgroundColor: theme.colors.disabled,
      borderRadius: theme.spacing.s75,
      justifyContent: "center",
      alignSelf: "center",
      alignItems: "center",
    },
  });
  