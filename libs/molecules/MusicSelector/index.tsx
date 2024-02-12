import { StyleSheet, Touchable, View } from "react-native";
import React from "react";
import { Box, MusicSelector, Text } from "@atoms";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  handleIndex?:()=>any
};

interface platformConfiguration{
  platFormName:string,
  Icon:'applemusic'|'spotify',
  iconColor:string,
  buttonColor:string
}
const index = (props: Props) => {
  
  const platFormData:platformConfiguration[] = [
    {
      platFormName:"Spotify",
      Icon:"spotify",
      iconColor:"#1DB954",
      buttonColor:"#1DB954"
    },
    {
      platFormName:"Apple Music",
      Icon:"applemusic",
      iconColor:"#f94c57",
      buttonColor:"#f94c57"
    }
]

  return (
    <Box
      flex={1}
      flexDirection="column"
      mb="s16"
      mt="s16"
      justifyContent="flex-start"
      
      
    >
      <Box
        flex={1}      
        maxHeight="80%"
        justifyContent="space-around"
        alignItems="center" 
        
        
      >
        {platFormData.map((item:platformConfiguration,index:number)=>(
          <MusicSelector
            
            key={index}
            Icon={item.Icon}
            handleIndex={props.handleIndex}
            buttonColor={item.buttonColor}
            IconColor={item.iconColor}
            platFormName={item.platFormName}
          />
        ))}
        {/* <MusicSelector/>
        <MusicSelector/> */}
        
        <TouchableOpacity>
          <Text variant="regular18" color="white">or Continue with Manual Setup</Text>
        </TouchableOpacity>
        
      </Box>
     
    </Box>
   
  );
};

export default index;

const styles = StyleSheet.create({});
