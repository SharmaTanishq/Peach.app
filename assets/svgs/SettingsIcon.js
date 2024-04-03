import * as React from "react"
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg"

function Settings(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1_2731)" stroke={props.color?props.color:"#121212"} strokeWidth={1.5}>
        <Rect
          x={10.2578}
          y={3.75}
          width={4.5}
          height={4.5}
          rx={2.25}
          transform="rotate(90 10.258 3.75)"
        />
        <Path d="M3 6h2.735M10.534 6H21" strokeLinecap="round" />
        <Rect
          x={13.7422}
          y={14.25}
          width={4.5}
          height={4.5}
          rx={2.25}
          transform="rotate(-90 13.742 14.25)"
        />
        <Path d="M21 12h-2.735M13.466 12H3" strokeLinecap="round" />
        <Rect
          x={10.2578}
          y={15.75}
          width={4.5}
          height={4.5}
          rx={2.25}
          transform="rotate(90 10.258 15.75)"
        />
        <Path d="M3 18h2.735M10.534 18H21" strokeLinecap="round" />
      </G>
      <Defs>
        <ClipPath id="clip0_1_2731">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Settings
