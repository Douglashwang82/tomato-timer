import React from 'react'
import softIcon from '../../static/imgs/softIcon.png';
type Props = {}

const NavBar = (props: Props) => {
  const icon = <svg
    width="130px"
    height="169px"
    viewBox="0 0 400 250"
    version="1.1"
    id="svg13150"
    xmlns="http://www.w3.org/2000/svg">
    <defs
      id="defs13147">
      <linearGradient
        id="linearGradient13468">
        <stop
          style={{ "stopColor": "#000000", "stopOpacity": "1" }}
          offset="0"
          id="stop13466" />
      </linearGradient>
    </defs>
    <g
      id="layer1">
      <path
        d="m 103.60869,179.48287 v -78.96591 h 11.67508 v 32.15038 h 12.52417 v -32.15038 h 11.67511 v 78.96591 h -11.67511 v -35.53466 h -12.52417 v 35.53466 z m -43.091734,0 v -78.96591 h 17.831057 q 6.081668,0 10.038468,2.42309 a 12.897798,13.708487 0 0 1 3.016414,2.54047 14.894239,15.830413 0 0 1 3.229757,6.0059 q 0.7366,2.41298 0.98921,5.33923 a 32.976842,35.049596 0 0 1 0.13266,3.20715 v 39.93421 a 29.881879,31.7601 0 0 1 -0.42456,5.54114 q -0.50414,3.01761 -1.60586,5.40012 a 14.006933,14.887337 0 0 1 -2.321217,3.61102 13.724604,14.587264 0 0 1 -6.061501,3.9438 q -2.191732,0.73327 -4.846227,0.93855 a 29.494477,31.348351 0 0 1 -2.147156,0.0814 z m 11.675098,-11.28083 h 5.943688 q 2.593991,0 4.101145,-1.48005 a 4.8515332,5.1564755 0 0 0 0.303544,-0.32488 5.0064937,5.321176 0 0 0 0.953114,-1.71245 q 0.548732,-1.54323 0.583751,-3.83891 a 18.360681,19.514738 0 0 0 0.0018,-0.31463 v -41.06226 q 0,-4.0611 -1.538991,-5.86602 a 4.9852662,5.298614 0 0 0 -2.590812,-1.59177 q -0.816195,-0.20977 -1.783101,-0.21313 a 9.6691034,10.276851 0 0 0 -0.03089,0 h -5.943707 z"
        vector-effect="non-scaling-stroke"
        id="path13363"
        style={{ "fontFamily":"Caveat, cursive;","fontSize": "12px", "fill": "black", "fillRule": "evenodd", "stroke": "none", "strokeWidth": "1.03391243", "strokeLinecap": "round", "strokeMiterlimit": "4", "strokeDasharray": "0, 11.37303677", "strokeDashoffset": "0" }} />
      <rect
        style={{ "fill": "none", "fillRule": "evenodd", "strokeWidth": "0.264583" }}
        id="rect13396"
        width="103.28881"
        height="92.209381"
        x="57.898914"
        y="99.357407" />
      <rect
        style={{ "fill": "none", "fillOpacity": "1", "fillRule": "evenodd", "stroke": "lightgreen", "strokeWidth": "3", "strokeMiterlimit": "4", "strokeDasharray": "none", "strokeOpacity": "1" }}
        id="rect13420"
        width="87.346001"
        height="87.346306"
        x="56.326843"
        y="96.326843"
        ry="0" />
    </g>
  </svg>;

  return (
    <nav className='navbar'>
      <span>{icon}</span>
      <span className="navbar-menu">
      <a href="#timer">Timer</a>
      <a href="#divider">Records</a>
      </span>
    </nav>
  )
}

export default NavBar