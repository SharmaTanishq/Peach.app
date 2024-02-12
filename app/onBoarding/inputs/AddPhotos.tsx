import {  StyleSheet, View } from "react-native";
import React, { useState } from "react";
import OnboardingLayout from "../layout";
import { Box,Header} from "@atoms";
import { screenWidth } from "@constant/utils";


import { theme } from "@theme";
import DraggableGrid from "react-native-draggable-grid";

import * as ImagePicker from 'expo-image-picker';
import { ImageIcon } from "@Icons";


type Props = {
  handleIndex: () => any;
};
const data = [
  { name: "1", key: "one" },
  { name: "2", key: "two" },
  { name: "3", key: "three" },
  { name: "4", key: "four" },
  { name: "5", key: "five" },
  { name: "6", key: "six" },
];
const AddPhotos = (props: Props) => {
    
  const [temp, setTemp] = useState(data);
  const [image, setImage] = useState('');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  
  const render_Item = (item: { name: string; key: string }) => {
    return (
      <View style={styles.item} key={item.key}>
        <ImageIcon size={28} color={theme.colors.textInputLightBG}/>
        {/* {image && <Image source={{ uri: image }} style={{ width: 110, height: 110,borderRadius:18 }} />} */}
      </View>
    );
  };
  return (
    <OnboardingLayout handleIndexPositive={props.handleIndex}>
      <Box
        backgroundColor="background"
        flex={1}
        style={{
          width: screenWidth,
        }}
      >
        <Box mt="s48" paddingHorizontal="paddingHorizontal" flex={1}>
          <Header
            heading="Add More Photos"
            subHeading="Photos increase your chance of getting matches. You can change these later"
          />
          <Box  flex={1}>
            <DraggableGrid
                numColumns={3}
                data={temp}
                
                style={{
                
                marginTop: 15,
                }}
                onItemPress={(item)=>{console.log(item.name)}}
                renderItem={render_Item}
                onDragRelease={(data) => {
                    setTemp(data); // need reset the props data sort after drag release
                }}
            />
         
          </Box>
        </Box>
      </Box>
    </OnboardingLayout>
  );
};

export default AddPhotos;

const styles = StyleSheet.create({
    button:{
        width:150,
        height:100,
        backgroundColor:'blue',
      },
  item: {
    width: 110,
    height: 110,
    borderRadius: 18,    
    backgroundColor: theme.colors.textInputBg,
    justifyContent: "center",
    alignItems: "center",
    
  }
 
});