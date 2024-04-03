import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function Notification(props) {
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
           d="M7.252 10.26c.917-2.392 2.177-3.224 4.249-3.224 2.072 0 3.332.832 4.249 3.224a.935.935 0 01.04.14l1.189 5.517a.963.963 0 01-.933 1.171h-2.387A2.217 2.217 0 0111.5 19.5a2.217 2.217 0 01-2.158-2.414H6.956a.963.963 0 01-.933-1.171L7.21 10.4a.944.944 0 01.04-.14z"           
           strokeWidth={1.5}
           strokeLinejoin="round"
           stroke={props.color?props.color:"#121212"}
      />
      <Path
        d="M9.343 16.336a.75.75 0 100 1.5v-1.5zm4.316 1.5a.75.75 0 000-1.5v1.5zm-4.316 0h4.316v-1.5H9.343v1.5z"
        fill={props.color?props.color:"#121212"}
      />
     
    </Svg>
  )
}

export default Notification
