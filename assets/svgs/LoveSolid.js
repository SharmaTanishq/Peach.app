import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function LoveSolid(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1_3037)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 4.048c-1.735-1.424-3.72-2.11-5.526-2.083-1.988.03-3.807.936-4.688 2.72-.874 1.77-.718 4.191.75 7.051 1.47 2.864 4.3 6.266 8.977 10.12a.747.747 0 00.974 0c4.678-3.854 7.507-7.256 8.977-10.12 1.469-2.86 1.624-5.28.75-7.05-.88-1.785-2.7-2.691-4.688-2.721-1.806-.027-3.791.66-5.526 2.083z"
          fill="#252525"
          {...props}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_3037">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default LoveSolid
