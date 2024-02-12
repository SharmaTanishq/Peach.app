import { Pressable, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Text, Box } from "@atoms";

import { Stack, useNavigation } from "expo-router";
import { theme } from "@theme";
import { screenWidth } from "@constant/utils";
import { PromptScrollCard } from "@molecules";

type Props = {};



export interface TabButton {
  title: string;
  accessibilityLabel: string;
  onPress: () => void;
}


const buttons: TabButton[] = [
  { title: "All", accessibilityLabel: "All", onPress: () => {} },
    {
      title: "Song",
      accessibilityLabel: "Song",
      onPress: () => {},
    },
    {
      title: "Artist",
      accessibilityLabel: "Artist",
      onPress: () => {},
    },
];

const tabHolderMaxWidth = 500;

const SelectPrompt = (props: Props) => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState(0);

  const [dimensions, setDimensions] = useState({
    height: 42,
    width: 430,
  });

  const buttonWidth = dimensions.width / buttons.length;

  const buttonHolderPadding = 28 + 17;

  const tabPositionX = useSharedValue(0);

  // on view layout, we measure the width and height and
  // set in state so we know how far to move the tab

  const handlePressCb = (index: number) => {
    setSelectedTab(index);
  };

  const onTabPress = (index: number) => {
    // animate the tab and fire callback
    tabPositionX.value = withTiming(109 * index, {}, () => {
      runOnJS(handlePressCb)(index);
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    // apply animated value to the style, moving the tab
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: theme.colors.background },
          title: "Select a prompt",
          headerTitleStyle: { color: theme.colors.snowy },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text variant="light18">Cancel</Text>
            </TouchableOpacity>
          ),
        }}
      />

      <Box
        backgroundColor="background"
        flex={1}
        style={{
          width: screenWidth,
        }}
      >
        <Box alignItems="flex-start">
          <Box
            backgroundColor="textInputBg"
            flexDirection="row"
            margin="s28"
            maxWidth={tabHolderMaxWidth}
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

            {buttons.map((button, index) => {
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
                      fontSize: 22,
                      fontWeight: "700",
                      color: "white",
                    }}
                  >
                    {button.title}
                  </Text>
                </Pressable>
              );
            })}
          </Box>

          <PromptScrollCard />
        </Box>
      </Box>
    </>
  );
};

export default SelectPrompt;

const styles = StyleSheet.create({
  tabStyle: {
    paddingTop: 13,
    paddingBottom: 13,
    width: "32%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});
