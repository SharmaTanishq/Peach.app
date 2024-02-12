import {  StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import Box from '../box'
import { Pressable } from 'react-native'
import Animated, {runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { theme } from '@theme'
import { TabButton } from 'app/onBoarding/inputs/SelectPrompt'
import { screenWidth } from '@constant/utils'

type Props = {
    tabHolderMaxWidth:number;
    tabData:any;
    handlePress:(index: number)=>any;
    width?:number
}


  


const index = (props: Props) => {

    const styles = StyleSheet.create({
        tabStyle: {
          paddingTop: 13,
          paddingBottom: 13,
          maxWidth:150,
          width: (props.width?props.width:screenWidth)/3,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
        },
      });


     const [dimensions, setDimensions] = React.useState({
        height: 42,
        width: props.width?props.width:screenWidth,
      });


      

      const buttonWidth = dimensions.width / props.tabData.length;

    //   const buttonHolderPadding = 28 + 17;
      const buttonHolderPadding = 1;

      const tabPositionX = useSharedValue(0);
      
       // on view layout, we measure the width and height and
      // set in state so we know how far to move the tab

      const animationDistance = Math.round((buttonWidth - buttonHolderPadding) - buttonHolderPadding*2)

      
      const onTabPress = (index: number) => {
        // animate the tab and fire callback
        tabPositionX.value = withTiming(animationDistance * index, {}, () => {
          runOnJS(props.handlePress)(index);
        });
      };

      const animatedStyle = useAnimatedStyle(() => {
    // apply animated value to the style, moving the tab
        return {
        transform: [{ translateX: tabPositionX.value }],
            };
        });

  return (
    <Box
    backgroundColor="textInputBg"
    flexDirection="row"
    maxWidth={props.tabHolderMaxWidth}
    alignItems="center"
    borderRadius={10}
  >
    <Animated.View
      style={[
        animatedStyle,
        {
          marginLeft: 4,
          backgroundColor: theme.colors.primary,
          borderRadius: 7,
          position: "absolute",
          height: dimensions.height,
          width: buttonWidth - buttonHolderPadding,
        },
      ]}
    />
    {/* @ts-ignore */}
    {props.tabData.map((button, index) => {
      return (
        <Pressable
          key={index.toString()}
          accessibilityRole="tab"
          accessibilityLabel={button.accessibilityLabel}
          onPress={() => onTabPress(index)}
          style={styles.tabStyle}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 20,
              fontWeight: "500",
              color: "white",
            }}
          >
            {button.title}
          </Text>
        </Pressable>
      );
    })}
  </Box>
  )
}

export default index


  