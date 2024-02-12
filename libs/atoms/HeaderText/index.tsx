import { StyleSheet } from "react-native";
import React from "react";
import Box from "../box";
import Text from "../text";


interface ButtonProps {
  heading?: string;
  subHeading: string;
  align?:'center'|'flex-start'|'flex-end';
  textAlign?:'center'|'right'|'left'
}

const Header: React.FC<ButtonProps> = ({ heading, subHeading,align,textAlign }) => {
  return (
    <Box justifyContent={align?align:'flex-start'} alignItems={align?align:'flex-start'}>
      <Text 
        textAlign={textAlign?textAlign:"left"}
        variant="bold28">{heading?heading:''}</Text>
      <Text 
       textAlign={textAlign?textAlign:"left"}
      variant="light16" mt="s16" lineHeight={25}>
        {subHeading}
      </Text>
    </Box>
  );
};

export default Header;

const styles = StyleSheet.create({});
