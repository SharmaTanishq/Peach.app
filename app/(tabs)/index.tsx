import {
  Dimensions,
  FlatList,
  
  NativeScrollEvent,
  
  NativeSyntheticEvent,
  
  StyleSheet,
  
} from "react-native";

import { Box, Text } from "@atoms";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { UserProfileData } from "libs/utils/Types/UserProfile"

import { theme } from "@theme";
import { screenWidth } from "@constant/utils";
import { BackgroundContainer, HomePrompt, ProfileOptions } from "@organisms";
import { users } from "@utils/faker";
import React from "react";



export default function Index() {
  
  const [currentIndex,setCurrentIndex] = React.useState(0)
  const bottomTabBarHeight = useBottomTabBarHeight(); 

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>)=>{
    const totalWidth = event.nativeEvent.layoutMeasurement.width;
    const xPos = event.nativeEvent.contentOffset.x;
    const current = Math.floor(xPos/totalWidth);
    setCurrentIndex(current);
   
  }
  
  
  return (
    <Box flex={1} justifyContent="center" alignItems="center">

      <Box>
        <FlatList<UserProfileData>
          data={users}
          directionalLockEnabled
          snapToAlignment="center"
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={1}
          snapToInterval={Dimensions.get("window").height-bottomTabBarHeight}
          style={{ flex: 1 }}
          pagingEnabled
          disableIntervalMomentum={true}
          contentContainerStyle={{
            alignItems: "center",
          }}
          renderItem={({item:itemMain}) => (
            
            <Box
              key={itemMain.userId}
              width={screenWidth}              
              height={Dimensions.get("window").height-bottomTabBarHeight}
              justifyContent="flex-end"
              alignItems="center"              
              overflow="hidden"
            > 
            
              <FlatList
                data={itemMain.userScreens}
                style={{ flex: 1 }}
                contentContainerStyle={{
                  alignItems: "center",
                }}
                onScroll={onScroll}
                
                showsHorizontalScrollIndicator={false}
                snapToInterval={screenWidth}
                snapToAlignment="center"
                horizontal
                renderItem={({item})=>(
                  <Box width={screenWidth}>
                    
                    <BackgroundContainer data={item} >
                      {item.screenType === "prompt"? 
                          <HomePrompt data={item} userProfileImage={itemMain.userDisplayImage} /> : <></>}
                    </BackgroundContainer>
                     
                      
                  </Box>
                )}
              />
              <Box position="absolute" height={"30%"} justifyContent="center" >
                  <ProfileOptions data={itemMain} currentIndex={currentIndex}/>
              </Box>
              
             
            </Box>
          )}
        />
      </Box>

     
                
           
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.background,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#fff",
  },

  genre: {
    //backgroundColor:theme.colors.textInputLightBG,
    borderRadius: 100,
  },
  blurContainer: {
    overflow: "hidden",
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
  },
});
