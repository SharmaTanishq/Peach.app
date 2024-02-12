import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, router, useNavigation } from "expo-router";
import { theme } from "@theme";
import { Box, Text } from "@atoms";
import { screenWidth } from "@constant/utils";
import { Feather, Fontisto } from "@expo/vector-icons";
import { PromptAnswerItem } from "@organisms";
import { SongData } from "libs/utils/Faker/getSongs";

type Props = {};

const PromptAnswer = (props: Props) => {
  const navigation = useNavigation();
  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: theme.colors.background },
          title: "Choose an Answer",
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
        padding="s18"
        justifyContent="space-around"
        style={{
          width: screenWidth,
        }}
      >
        <Box
          flex={1}
          backgroundColor="textInputBg"
          flexDirection="row"
          borderRadius={15}
          justifyContent="flex-start"
          paddingLeft="s24"
          alignItems="center"
        >
          {/* Selected Prompt */}

          <Box
            backgroundColor="textInputLightBG"
            padding="s18"
            borderRadius={100}
            marginRight="s14"
          >
            <Feather name={"music"} size={24} color={theme.colors.primary} />
          </Box>
          <Box maxWidth={200}>
            <Text variant="semiBold18" color="white" marginBottom="s8">
              I put this on when I need to relax...
            </Text>
            <Text color="white" variant="regular14">
              A song to chill out to
            </Text>
          </Box>
        </Box>

        <Box flex={1 / 2} marginTop="s16">
          {/* Search Input */}
          <TouchableOpacity
            onPress={() => router.push("/onBoarding/inputs/SearchScreen")}
            style={{ flex: 1 }}
          >
            <Box
              backgroundColor="textInputBg"
              justifyContent="flex-start"
              alignItems="center"
              padding="s12"
              borderRadius={100}
              flexDirection="row"
            >
              <Feather
                name="search"
                color={"white"}
                size={24}
                style={{ marginRight: 15 }}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "600",
                }}
              >
                Search Songs ...
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>

        <Box
          flex={4}
          backgroundColor="textInputBg"
          padding="s18"
          marginBottom="s30"
          borderRadius={15}
        >
          <Box flexDirection="row" alignItems="center">
            <Fontisto name="applemusic" size={24} color="white" />
            <Text variant="semiBold18" marginLeft="s16" color="white">
              Recently Played Songs
            </Text>
          </Box>
          <FlatList
            contentContainerStyle={{ marginTop: 20 }}
            data={SongData}
            showsVerticalScrollIndicator={false}
            scrollEnabled
            renderItem={(item) => (
              <PromptAnswerItem
                isSong={item.item.isSong}
                songArtist={item.item.songArtist}
                songImg={item.item.songImg}
                songName={item.item.songName}
              />
            )}
          />
        </Box>
      </Box>
    </>
  );
};

export default PromptAnswer;

const styles = StyleSheet.create({});
