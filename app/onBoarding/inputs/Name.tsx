import { StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { Box, Header } from "@atoms";
import { screenWidth } from "@constant/utils";
import { theme } from "@theme";
import OnboardingLayout from "../layout";

interface props{
  handleIndex:()=>any
}

const Name = (props:props) => {
  const [name, setName] = useState("");

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
            heading="What's your first name?"
            subHeading="This will be shown on your profile. You cannot change this
          later."
          />
          <TextInput
            style={[theme.cardVariants.textInput, { marginTop: 24 }]}
            placeholder="john doe"
            value={name}
            onChangeText={(text) => {
              setName(text);
            }}
            placeholderTextColor={theme.colors.lightGrey}
          />
        </Box>
      </Box>
    </OnboardingLayout>
  );
};

export default Name;

const styles = StyleSheet.create({});
