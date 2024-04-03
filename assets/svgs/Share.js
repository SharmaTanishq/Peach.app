import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Share(props) {
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
        clipRule="evenodd"
        d="M14.234 15.897l4.486-3.76a.762.762 0 000-1.18l-4.486-3.76a.823.823 0 00-1.357.59V9.27C6.579 8.18 5 13.815 5 16.997c1.461-2.424 5.247-6.818 7.877-3.182v1.487a.823.823 0 001.357.595z"
        stroke="#000"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </Svg>
  )
}

export default Share
