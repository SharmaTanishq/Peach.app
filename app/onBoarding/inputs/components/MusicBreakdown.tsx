import React, { useEffect } from "react";
import { FlatList, StyleSheet, Image } from "react-native";

import OnboardingLayout from "../../layout";
import { Box } from "@atoms";
import { screenWidth } from "@constant/utils";

import { Text, Header } from "@atoms";
import { getMultipleArtist } from "@utils/faker";
import { theme } from "@theme";

type Props = {
  handleIndex: () => any;
};

interface Artist {
  imageUrl: string;
  artistName: string;
}

const MusicBreakdown = (props: Props) => {
  const artistArray: Artist[] = getMultipleArtist();
  useEffect(() => {}, []);

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
            heading="Your Music Breakdowns"
            subHeading="Review your incredible music taste, You can change this later!"
          />
          <Header
            subHeading={`You synced ${artistArray.length} Top Artists from apple music`}
          />
          <Box style={{ flex: 1, paddingTop: 10 }}>
            <FlatList
              data={artistArray}
              numColumns={3}
              directionalLockEnabled
              contentContainerStyle={{
                paddingBottom: 20,
                alignSelf: "center",
              }}
              renderItem={(item) => (
                <Box
                  height={120}
                  width={120}
                  style={{
                    alignItems: "center",
                    position: "relative",
                    marginBottom: 20,
                  }}
                >
                  <Box
                    style={{
                      backgroundColor: theme.colors.primary,
                      padding: 5,
                      borderRadius: 30 / 2,
                      width: 30,
                      height: 30,
                      justifyContent: "center",
                      left: -35,
                      bottom: -30,
                      zIndex: 999,
                      alignItems: "center",
                    }}
                  >
                    <Text color="white" variant="semiBold14">
                      {item.index + 1}
                    </Text>
                  </Box>
                  <Image
                    source={{ uri: item.item.imageUrl }}
                    style={{
                      width: "75%",
                      height: "75%",
                      borderRadius: 120 / 2,
                    }}
                  ></Image>
                  <Text
                    style={{ color: "white", marginBottom: 20, marginTop: 10 }}
                  >
                    {item.item.artistName}
                  </Text>
                </Box>
              )}
            ></FlatList>
          </Box>
        </Box>
      </Box>
    </OnboardingLayout>
  );
};

export default MusicBreakdown;

const styles = StyleSheet.create({});
