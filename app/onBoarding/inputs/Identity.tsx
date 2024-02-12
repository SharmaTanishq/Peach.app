import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Box, CommonOptionsSelector, Header } from "@atoms";

import { screenWidth } from "@constant/utils";
import OnboardingLayout from "../layout";

interface props {
  handleIndex: () => any;
}

const Identity = (props: props) => {
  const OCCUPATION_DATA = [
    {
      title: "Man",
      value: "Man",
    },
    {
      title: "Woman",
      value: "Woman",
    },
    {
      title: "Non-binary",
      value: "Non-binaryProfessional",
    },
  ];

  const [selectedOccupationIndex, setSelectedOccupationIndex] = useState<
    number | null
  >(-1);

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
            heading="How do you identify?"
            subHeading="Peach is an inclusive community. Everyone is welcome here."
          />
          <Box flex={1} mt="s48">
            <CommonOptionsSelector
              DATA={OCCUPATION_DATA}
              selectedIndex={selectedOccupationIndex}
              setSelectedIndex={setSelectedOccupationIndex}
            />
          </Box>
        </Box>
      </Box>
    </OnboardingLayout>
  );
};

export default Identity;

const styles = StyleSheet.create({});
