import { ImageBackground, StyleSheet, Image, TouchableOpacity, View, Dimensions,  } from 'react-native'
import React, { useEffect } from 'react'
import { Box, CircleBackground, HomeGradient, Text } from '@atoms'
import { screenWidth } from '@constant/utils'
import { useHeaderHeight } from '@react-navigation/elements';
import Animated,{ Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'
import { UserScreenType } from 'libs/utils/Types/UserProfile';

type Props = {
    data:UserScreenType,
    
    children?:any
}

const index = (props: Props) => {
    const headerHeight = useHeaderHeight()
    const scale = useSharedValue(1)
    
    //@ts-ignore
    const imageUri = props.data.screenType==="image"? props.data.screenData.url:props.data.screenData!.promptAnswer.promptImage;
    const animatedStyles = useAnimatedStyle(() => {
      return {
        
        transform: [{ scale: scale.value }],
      };
    }, []);

    useEffect(()=>{
      console.log("Background Data",props.data)
    },[])
  
    useEffect(() => {
      scale.value = withRepeat(
        withTiming(scale.value + 0.1, {
          duration: 22000,
          easing: Easing.ease,
        }),
        -1,
        true
      );
    }, []);
  return (
    <Box
          width={screenWidth}
                  height={Dimensions.get("window").height}
                  justifyContent="center"
                  alignItems="center"
                 
                  overflow="hidden"
    >
    <HomeGradient />
      <Animated.Image
                    source={{
                      uri: imageUri
                    }}
                    style={[
                      animatedStyles,
                      {
                        width: "100%",
                        height: "100%",
                        position:"absolute"
                        
                      },
                    ]}
                    />
                    <Box flex={1} zIndex={2}  style={{paddingVertical:headerHeight * 2.2}}>
                      {props.children}
                    </Box>
                          
    
    </Box>
  )
}

export default index

const styles = StyleSheet.create({})