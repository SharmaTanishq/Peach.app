import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Box from "../box";
import Text from "../text";
import { theme } from "@theme";

interface DataItem {
  title: string;
  isSelected: boolean;
  index: number;
}

interface PropData {
  title: string;
  value: string;
}

interface CommonOptionsSelector {
  DATA: PropData[];
  selectedIndex: number | null;
  setSelectedIndex: (index: number) => void;
  onPress?: () => void;
}

interface Item {
  index: number;
  isSelected: boolean;
  title: string;
}

const CommonOptionsSelector: React.FC<CommonOptionsSelector> = ({
  DATA,
  selectedIndex,
  setSelectedIndex,
  onPress,
}) => {
  const [flatListArray, setFlatListArray] = useState<DataItem[]>([]);

  const Item = ({ item }: { item: Item }) => {
    const onPressItem = () => {
      let newArr = [];
      if ((flatListArray || item.index !== -1) && item.isSelected === false) {
        setSelectedIndex(item.index);
        flatListArray[item.index].isSelected = !item.isSelected;
        flatListArray
          .filter((filterItem) => filterItem !== flatListArray[item.index])
          .map((newItem) => (newItem.isSelected = false));
        newArr.push(...flatListArray);
        setFlatListArray(newArr);
      }
    };

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPressItem}>
        <Box
          flex={1}
          flexDirection="row"
          mb="s16"
          backgroundColor="textInputBg"
          padding="s16"
          borderRadius={40}
        >
          <Box width={"100%"} flexShrink={1} justifyContent="center">
            <Text
              variant="semiBold16"
              lineHeight={20}
              numberOfLines={1}
            >
              {item.title}
            </Text>
          </Box>
          <BouncyCheckbox
            disableBuiltInState
            isChecked={item.isSelected}
            onPress={onPressItem}
            iconStyle={{
              borderColor: theme.colors.primary,
            }}
            fillColor={theme.colors.primary}
            size={24}
          />
        </Box>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }: { item: Item }) => <Item item={item} />;

  const addOptions = DATA?.map((item, index) => {
    return {
      title: item.title,
      isSelected: index == selectedIndex ? true : false,
      index: index,
    };
  });

  useEffect(() => {
    setFlatListArray(addOptions);
  }, []);

  return (
    <Box>
      <FlatList
        data={flatListArray}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginBottom: theme.spacing.s12 }}
      />
    </Box>
  );
};

export default CommonOptionsSelector;
