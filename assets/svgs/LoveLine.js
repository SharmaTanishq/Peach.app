import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_1_2369)"
        stroke={props.color?props.color:"#121212"}
        strokeWidth={1.5}
        strokeLinecap="round"
      >
        <Path d="M12 5.045c-6.888-6.443-18.556.956 0 16.24M12 5.045c6.888-6.443 18.556.956 0 16.24" />
      </G>
      <Defs>
        <ClipPath id="clip0_1_2369">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
