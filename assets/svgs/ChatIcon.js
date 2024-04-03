import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChatIcon(props) {
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
        clipRule="evenodd"
        d="M12 5a7 7 0 00-6.213 3.774C4.583 11.094 5.497 14.863 7 17l-2 2h7a7 7 0 100-14z"
        stroke={props.color?props.color:"#121212"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 13.25a.75.75 0 000 1.5v-1.5zm4 1.5a.75.75 0 000-1.5v1.5zm-4-4.5a.75.75 0 000 1.5v-1.5zm6 1.5a.75.75 0 000-1.5v1.5zm-6 3h4v-1.5H9v1.5zm0-3h6v-1.5H9v1.5z"
        fill={props.color?props.color:"#121212"}
      />
     
    </Svg>
  )
}

export default ChatIcon
