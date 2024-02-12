import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

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
    <Path
      d="M12 19H4M20 5h-2M20 19h-4M12 5H4M7 12H4M20 12h-8"
      stroke={props.color?props.color:"#121212"}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Circle
      cx={14}
      cy={19}
      r={2}
      transform="rotate(-90 14 19)"
      stroke={props.color?props.color:"#121212"}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Circle
      cx={9}
      cy={12}
      r={2}
      transform="rotate(-90 9 12)"
      stroke={props.color?props.color:"#121212"}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Circle
      cx={15}
      cy={5}
      r={2}
      transform="rotate(-90 15 5)"
      stroke={props.color?props.color:"#121212"}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
  )
}

export default Settings
