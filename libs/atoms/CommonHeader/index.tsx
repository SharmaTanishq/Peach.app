import {
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
  } from "react-native";
  import React from "react";
  import { BlendIcon } from "../../../assets/svgs";
  import Icons from "../../../assets/constants";
  import Box from '../../atoms/box'
  import { useNavigation } from "@react-navigation/native";
import Text from "../text";
  
  interface HeaderProps {
    hideBackButton?: boolean;
    onPressBack?: any;
  }
  
  const CommonHeader: React.FC<HeaderProps> = ({
    hideBackButton = true,
    onPressBack,
  }) => {
    const navigation = useNavigation();
  
    return (
      <Box paddingHorizontal="paddingHorizontal" backgroundColor="background">
        <Box
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
        >
          {hideBackButton === true ? (
            <>
              <TouchableOpacity
                onPress={onPressBack ? onPressBack : () => navigation.goBack()}
                style={{ paddingRight: 8, borderRadius: 50, paddingVertical: 8 }}
              >
                <Image
                  source={Icons.backIcon}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                    tintColor: "white",
                  }}
                />
              </TouchableOpacity>
            </>
          ) : (
            <Box></Box>
          )}
  
          <Box style={{ marginRight: hideBackButton ? 32 : 0 }}>
            <Text variant="bold32">🍑</Text>
          </Box>
          <Box></Box>
        </Box>
      </Box>
    );
  };
  
  export default CommonHeader;
  
  const styles = StyleSheet.create({});
  