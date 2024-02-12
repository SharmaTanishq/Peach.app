import { StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { Box, Header } from "@atoms";
import { theme } from "@theme";

import { screenWidth } from "@constant/utils";
import OnboardingLayout from "../layout";

interface props {
  handleIndex: () => any;
}

const Email = (props: props) => {
  const [userEmail, setUserEmail] = useState("");

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
            heading="What's your email?"
            subHeading="This will not be shown to others. You will be able to change this
            later."
          />
          <TextInput
            style={[theme.cardVariants.textInput, { marginTop: 24 }]}
            placeholder="john.doe@example.com"
            value={userEmail}
            onChangeText={(text) => {
              setUserEmail(text);
            }}
            keyboardType="email-address"
            placeholderTextColor={theme.colors.lightGrey}
          />
        </Box>
      </Box>
    </OnboardingLayout>
  );
};

export default Email;

const styles = StyleSheet.create({});
