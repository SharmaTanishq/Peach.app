import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Close(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M5 5l14 14M5 19l7-7 7-7"
        stroke="#2D264B"
        {...props}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default Close
