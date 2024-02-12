import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { theme } from '@theme';
import { AppContext } from "context/context";




const ProgressBar = ({ progress }: { progress?: number }) => {
  const [widthAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(widthAnimation, {
      toValue: progress!,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress, widthAnimation]);

  

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.progressBar,
          {
            width: widthAnimation.interpolate({
              inputRange: [0, 100],
              outputRange: ["0%", "100%"],
            }),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 4,
    backgroundColor: theme.colors.progressBarBg,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: theme.colors.primary,
  },
});

export default ProgressBar;
