import { StyleSheet } from "react-native";
import React from "react";
import { Box, Header } from "@atoms";

import { screenWidth } from "@constant/utils";
import { SelectMusicPlatform } from "@molecules";

interface ConnectPlatformProps {
  handleIndex: () => any;
}

const ConnectPlatform = (props: ConnectPlatformProps) => {
  return (
    <Box
      backgroundColor="background"
      flex={1}
      style={{
        width: screenWidth,
      }}
    >
      <Box mt="s48" paddingHorizontal="paddingHorizontal" flex={1}>
        <Header
          heading="What's your vibe?"
          subHeading="Pick Music that you vibe with to discover recommended people and events"
        />
        <Box flex={1}>
          <SelectMusicPlatform handleIndex={props.handleIndex} />
        </Box>
      </Box>
    </Box>
  );
};

export default ConnectPlatform;

const styles = StyleSheet.create({});
