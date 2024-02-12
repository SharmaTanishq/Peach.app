import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Stack, useNavigation } from "expo-router";

import { Box, SearchHeader } from "@atoms";

import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SongData } from "libs/utils/Faker/getSongs";
import { PromptAnswerItem } from "@organisms";

type Props = {};

const SearchScreen = (props: Props) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <StatusBar style="light" />
      <Box
        flex={1}
        style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
        backgroundColor="background"
      >
        <SearchHeader onPressBack={() => {}} />

        <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
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
        </SafeAreaView>
      </Box>
    </Box>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
