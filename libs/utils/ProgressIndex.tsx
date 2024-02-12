import React, { useRef } from 'react'
import { AppContext } from "context/context";
import { useCallback, useContext, useState } from "react";
import { CommonSolidButton } from '@atoms';







const ViewData = [
  "Email",
  "Name",
  "Birthday",
  "Identity",
  "Interest",
  "ConnectPlatform",
];

type Props = {}



export const changeIndexPositiveFunction = (ViewData:any) => {

          const {state,dispatch} =useContext(AppContext);
          const flatListRef: any = useRef();
          const index = state.onBoardingPageIndex;
          const newIndex = index < ViewData.length - 1 ? index + 1 : index;
          const dummyIndex = index + 1;
          if (dummyIndex !== ViewData.length) {
            flatListRef.current?.scrollToIndex({
              index: newIndex,
            });
          } else {
            console.log("last");
          }
          
          return newIndex;
        
      };
  
