import { StyleSheet } from "react-native";
import React from "react";
import { Box, Text, Header, CircleBackground } from "@atoms";
import { screenWidth } from "@constant/utils";
import OnboardingLayout from "../layout";

import { Ionicons } from "@expo/vector-icons";
import { theme } from "@theme";

type Props = {
  handleIndex?: () => any;
};

const UploadPhoto = (props: Props) => {
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
          <Header heading="Upload a photo" subHeading=""></Header>
          <Box
            style={{
              flex: 1,
              paddingTop: 10,
              justifyContent: "flex-start",
              alignItems: "center",
              paddingBottom: 70,
            }}
          >
            <CircleBackground
              width={170}
              height={170}                         
            >
              <Ionicons
                name="person-outline"
                size={90}
                color={theme.colors.primary}
              />
            </CircleBackground>
            <Box paddingHorizontal="s38" paddingTop="s24">
              <Text
                color="white"
                lineHeight={24}
                textAlign="center"
                variant="regular16"
              >
                Peach is about creating authentic connection with real people.
                Please add a photo of yourself to show off the real you.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </OnboardingLayout>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({});
