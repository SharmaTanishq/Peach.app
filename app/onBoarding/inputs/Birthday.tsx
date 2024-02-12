import { StyleSheet, TextInput } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box,Header } from "@atoms";
import { theme } from "@theme";
import { screenWidth } from "@constant/utils";


import {
  DynamicSnapPointBottomSheet,
  CommonSolidButton,
  CommonDatePicker,
} from "@atoms";
import {
  DatePickerOptions,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native-gesture-handler";
import OnboardingLayout from "../layout";

interface props {
  handleIndex: () => any;
}

const Birthday = (props: props) => {
  const [birthday, setBirthday] = useState("");

  // DOB PICKER

  const dob = new Date();

  const [date, setDate] = useState(dob);

  const dobPickerSheetRef: any = useRef(null);
  const dobPickerHandleExpandPress = useCallback(() => {
    dobPickerSheetRef.current?.expand();
  }, []);

  const dobPickerHandleClosePress = useCallback(() => {
    dobPickerSheetRef.current?.close();
  }, []);

  const onChangeDate = (date: DateTimePickerEvent) => {
    setDate(() => {
      return new Date(date.nativeEvent.timestamp);
    });
  };

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
            heading="When's your birthday?"
            subHeading="We only show your age to potential matches, not your birthday."
          />
          <TouchableOpacity onPress={dobPickerHandleExpandPress}>
            <TextInput
              style={[theme?.cardVariants.textInput, { marginTop: 24 }]}
              editable={false}
              placeholder="Select Birthday"
              value={date ? date.toLocaleDateString() : dob.toLocaleString()}
              placeholderTextColor={theme.colors.lightGrey}
            />
          </TouchableOpacity>
        </Box>
        {/* DOB PICKER */}
        <DynamicSnapPointBottomSheet
          handleExpandPress={dobPickerHandleExpandPress}
          bottomSheetRef={dobPickerSheetRef}
          hideHandle
        >
          <CommonDatePicker
            value={date}
            onChange={onChangeDate}
            //setDate={setDate}
            //maximumDate={new Date(getDate18YearsAgo())}
            maximumDate={new Date()}
          />
        </DynamicSnapPointBottomSheet>
      </Box>
    </OnboardingLayout>
  );
};

export default Birthday;

const styles = StyleSheet.create({});
