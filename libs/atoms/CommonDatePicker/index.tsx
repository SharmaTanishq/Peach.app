import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Box from "../box";
import { theme } from "@theme";
import DateTimePicker from "@react-native-community/datetimepicker";

const CommonDatePicker = (props:any) => {
  
  return (
    <Box backgroundColor="background">
      
      <DateTimePicker
        testID="dateTimePicker"
        value={props.value}
        
        mode={"date"}
        is24Hour={true}
        onChange={props.onChange}
        display='spinner'
        themeVariant='dark'

      />
    </Box>
  );
};

export default CommonDatePicker;

const styles = StyleSheet.create({
  datePicker: {
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    height: 200,
    alignSelf: "center",
  },
});
