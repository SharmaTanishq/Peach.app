import React, { useCallback, useEffect, useMemo, useState } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Easing } from "react-native-reanimated";
import { BackHandler } from "react-native";
import { IS_IOS } from "@constant/utils";
import { theme } from "@theme";

interface DynamicSnapPointBottomSheetProps{
  children?:any
  bottomSheetRef?:any
  bottomTabPadding?:any
  hideHandle?:any
  disablePanDownToClose?:any
  disableBackdropPressBehavior?:any
  disableBackAction?:any
  isScrollView?:any
  handleExpandPress?:any
}

const DynamicSnapPointBottomSheet = (SnapPointProps:DynamicSnapPointBottomSheetProps) => {
  const insets = useSafeAreaInsets();

  const initialSnapPoints = useMemo(
    () => ["CONTENT_HEIGHT", "CONTENT_HEIGHT"],
    []
  );

  

  const [bottomSheetIndex, setBottomSheetIndex] = useState(-1);

  const handleSheetChanges = useCallback((index:number) => {
    setBottomSheetIndex(index);
  }, []);

  const renderBackdrop = useCallback(
    (props:any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior={SnapPointProps.disableBackdropPressBehavior ? "none" : "close"}
      />
    ),
    []
  );

  const handleStyle = SnapPointProps.hideHandle
    ? {
        backgroundColor: theme.colors.red,
        borderRadius: 8,
        height: 0,
        padding: 0,
      }
    : {
        height: 0,
        padding: 0,
      };

  const handleIndicatorStyle = SnapPointProps.hideHandle
    ? {
        backgroundColor: theme.colors.background,
        height: 0,
      }
    : {};

  const bottomSheetViewStyle = {
    paddingBottom: SnapPointProps.bottomTabPadding
      ? 75
      : IS_IOS
      ? insets.bottom == 0
        ? 16
        : insets.bottom
      : 16,
  };

  useEffect(() => {
    if (SnapPointProps.disableBackAction) {
      const backAction = () => {
        if (bottomSheetIndex === 1) {
          return true;
        } else {
          return false;
        }
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }
  }, [bottomSheetIndex]);

  const renderView = () => {
    if (SnapPointProps.isScrollView) {
      return (
        <BottomSheetScrollView 
        // onLayout={handleContentLayout}
        >
          {SnapPointProps.children}
        </BottomSheetScrollView>
      );
    }
    return (
      <BottomSheetView
        // onLayout={handleContentLayout}
        style={[
          bottomSheetViewStyle,
          { backgroundColor: theme.colors.background },
        ]}
      >
        {SnapPointProps.children}
      </BottomSheetView>
    );
  };
  const snapPoints = useMemo(() => ['25%', '30%'], []);
  return (
    <BottomSheet
      ref={SnapPointProps.bottomSheetRef}
      snapPoints={snapPoints}
      enableDynamicSizing      
      index={-1}
      enablePanDownToClose={SnapPointProps.disablePanDownToClose ? false : true}      
      backdropComponent={renderBackdrop}
      handleStyle={handleStyle}
      handleIndicatorStyle={handleIndicatorStyle}
      //@ts-ignore
      animationDuration={500}
      animationEasing={Easing.out(Easing.quad)}
      onChange={handleSheetChanges}
    >
      {/* <BottomSheetView
        onLayout={handleContentLayout}
        style={bottomSheetViewStyle}
      >
        {children}
      </BottomSheetView> */}
      {renderView()}
    </BottomSheet>
  );
};

export default DynamicSnapPointBottomSheet;
