import React from 'react'

const Logo = ({width, height, fill}) => {
  return (
    <svg width={width} height={height} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 593.98 675.69">
      <polygon fill={fill} opacity='.5' className="cls-1" points="0 124.11 0 551.57 275.86 427.46 275.86 0 0 124.11"/>
      <polygon fill={fill} className="cls-2" points="275.86 248.24 275.86 675.69 0 551.59 0 124.11 275.86 248.24"/>
      <polygon fill={fill} opacity='.5' className="cls-1" points="593.98 551.57 318.12 427.43 318.12 248.23 593.98 372.37 593.98 551.57"/>
      <polygon fill={fill} className="cls-2" points="593.98 372.37 318.12 496.5 318.12 675.69 593.98 551.61 593.98 372.37"/>
      <polygon fill={fill} opacity='.5' className="cls-1" points="593.98 303.3 318.12 179.17 318.12 0 593.98 124.11 593.98 303.3"/>
      <polygon fill={fill} className="cls-2" points="593.98 124.11 318.12 248.24 318.12 427.41 593.98 303.31 593.98 124.11"/>
    </svg>
  )
}

export default Logo
