import { StyleSheet, View } from "react-native";
import React from "react";
import Box from "../box";
import Text from "../text";
import Button from "../button";
import { Fontisto } from "@expo/vector-icons";

type Props = {
  platFormName:string,
  Icon:'applemusic'|'spotify',
  IconColor:string,
  buttonColor:string
  handleIndex?:()=>any
  
};

const index = (props: Props) => {
  
  return (
    <Box
      width={"100%"}
      flexShrink={1}
      flexDirection="column"
      justifyContent="center"
      borderRadius={20}
      padding="s16"
      backgroundColor="textInputBg"
    >
      <Box flexDirection="row" justifyContent="space-between" mb="s14" alignItems="center">
        <Box flexDirection="row" alignItems="center" >
          <Fontisto name={props.Icon} size={28} color={props.IconColor} style={{marginRight:8}} />
          <Text variant="bold16" lineHeight={20} numberOfLines={1}>
            {props.platFormName}
          </Text>
          </Box>
        <Text variant="normal" color="white" lineHeight={20} numberOfLines={1}>
          (recommended)
        </Text>
      </Box>
      <Text variant="regular14"  marginBottom="s14">Sync your listening history from spotify</Text>
      <Box>
        <Button
          onPress={props.handleIndex!}
          backgroundColor={props.buttonColor}
          alignSelf="center"
          borderRadius={40}
          width="100%"
        >
          <Text variant="semiBold16" color="black">Connect {props.platFormName}</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default index;

const styles = StyleSheet.create({});
