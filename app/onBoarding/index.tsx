import { FlatList } from "react-native";
import React, {
  useCallback,
  useContext,
  
  useRef,
  useState,
} from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  CommonHeader,
  
  ProgressBar,
  Box,
  Text,
} from "@atoms";
import { theme, FONT } from "@theme";

import Email from "./inputs/Email";
import { useNavigation } from "@react-navigation/native";

import { Name, 
         Identity, 
         Interest, 
         Birthday, 
         ConnectPlatform,
         MusicBreakdown
         } from "./inputs";

import { AppContext } from "context/context";
import { Types } from "context/actionsType";

import AddPrompts from "./inputs/AddPrompts";
import UploadPhoto from "./inputs/UploadPhoto";
import AddPhotos from "./inputs/AddPhotos";
import Personalize from "./inputs/Personalize";

const OnBoardingScreens = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const flatListRef: any = useRef();
  const { state, dispatch } = useContext(AppContext);

  const [currentIndex, setCurrentIndex] = useState(state.onBoardingPageIndex);
  const [isSelected, setIsSelected] = useState([]);

  const ViewData = [
    "Email",
    "Name",
    "Birthday",
    "Identity",
    "Interest",
    "ConnectPlatform",
    "MusicBreakdown",
    "AddPrompts",
    "UploadPhoto",
    "AddPhotos",
    "Personalize"
  ];

  const changeIndexPositive = useCallback(() => {
    setCurrentIndex((index) => {
      const newIndex = index < ViewData.length - 1 ? index + 1 : index;
      const dummyIndex = index + 1;
      if (dummyIndex !== ViewData.length) {
        flatListRef.current?.scrollToIndex({
          index: newIndex,
        });
      } else {
        console.log("last");
      }
      dispatch({ type: Types.Increase });
      return newIndex;
    });
  },[ViewData]);

  const changeIndexNegative = useCallback(() => {
    setCurrentIndex((index) => {
      const newIndex = index - 1;
      flatListRef.current?.scrollToIndex({
        index: newIndex,
      });
      dispatch({ type: Types.Decrease });
      return newIndex;
    });
  },[ViewData]);

  const onPressBack = () => {
    if (currentIndex == 0) {
      
      navigation.goBack();
    } else {
      changeIndexNegative();
    }
  };

  const renderScreens = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      switch (item) {
        case "Email":
          return <Email handleIndex={changeIndexPositive} />;

        case "Name":
          return <Name handleIndex={changeIndexPositive} />;

        case "Birthday":
          return <Birthday handleIndex={changeIndexPositive} />;

        case "Identity":
          return <Identity handleIndex={changeIndexPositive} />;

        case "Interest":
          return <Interest handleIndex={changeIndexPositive} />;

        case "ConnectPlatform":
          return <ConnectPlatform handleIndex={changeIndexPositive} />;

        case "MusicBreakdown":
          return <MusicBreakdown handleIndex={changeIndexPositive}/>;

        case "AddPrompts":
          return <AddPrompts handleIndex={changeIndexPositive} />;
        case "UploadPhoto":
            return <UploadPhoto handleIndex={changeIndexPositive} />;
        case "AddPhotos":
            return <AddPhotos handleIndex={changeIndexPositive} />;
        case "Personalize":
            return <Personalize/>
        default:
          return <></>;
      }
    },
    [ViewData]
  );

  return (
    <Box flex={1}>
      <StatusBar style="light" />
      <Box
        flex={1}
        style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
        backgroundColor="background"
      >
        <CommonHeader onPressBack={onPressBack} />

        <ProgressBar
          progress={(Number(currentIndex + 1) / Number(ViewData.length)) * 100}
        />

        <FlatList
          data={ViewData}
          renderItem={renderScreens}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            backgroundColor: theme.colors.background,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          bounces={false}
          ref={(ref) => (flatListRef.current = ref)}
          onScrollToIndexFailed={() => {
            setTimeout(() => {
              if (flatListRef) {
                flatListRef?.current?.scrollToIndex({
                  index: 1,
                  animated: true,
                });
              }
            }, 100);
          }}
          ListEmptyComponent={<></>}
        />
       
      </Box>
    </Box>
  );
};

export default OnBoardingScreens;
