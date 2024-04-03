import * as React from "react"
import Svg, { G, Path, Rect, Defs, ClipPath } from "react-native-svg"

function Home(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1_2961)" stroke={props.color?props.color:"#121212"} strokeWidth={1.5}>
        <Path d="M18.117 6.098c.855.636 1.46 1.088 1.911 1.484.443.388.694.688.86 1 .342.642.362 1.376.362 3.37v1.49c0 2.042-.002 3.485-.174 4.58-.166 1.058-.477 1.683-1.028 2.155-.568.486-1.35.772-2.647.921-1.309.15-3.026.152-5.401.152s-4.092-.001-5.4-.152c-1.298-.149-2.08-.435-2.648-.921-.55-.472-.862-1.097-1.028-2.156-.172-1.094-.174-2.537-.174-4.579v-1.49c0-1.994.02-2.728.362-3.37.166-.312.417-.612.86-1 .45-.396 1.056-.848 1.91-1.484 1.58-1.176 2.712-2.018 3.68-2.573.95-.544 1.678-.775 2.438-.775.76 0 1.489.23 2.438.775.968.555 2.1 1.397 3.68 2.573z" />
        <Rect x={9.25} y={9.75} width={5.5} height={5.5} rx={2.25} />
      </G>
      <Defs>
        <ClipPath id="clip0_1_2961">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Home
