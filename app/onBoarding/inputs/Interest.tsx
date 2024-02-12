import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Box, CommonOptionsSelector, Header } from "@atoms";

import { screenWidth } from "@constant/utils";
import OnboardingLayout from "../layout";

interface props {
  handleIndex: () => any;
}

const Interest = (props: props) => {
  const OCCUPATION_DATA = [
    {
      title: "Men",
      value: "Men",
    },
    {
      title: "Women",
      value: "Women",
    },
    {
      title: "Everyone",
      value: "Everyone",
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
            heading="Who are you interested in?"
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

export default Interest;

const styles = StyleSheet.create({});
