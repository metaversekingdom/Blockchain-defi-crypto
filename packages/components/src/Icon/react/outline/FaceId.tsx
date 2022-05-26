import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgFaceId = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V6a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H6ZM4 15a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1ZM15 4a1 1 0 0 1 1-1h2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1ZM20 15a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1ZM15.5 8a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1ZM8.5 8a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1ZM9.647 14.363a1 1 0 0 0-1.305 1.515L9 15.125l-.658.753h.001l.002.002.003.003.008.007.022.018.061.049c.05.037.116.086.2.14.167.11.404.248.71.382.615.269 1.5.521 2.651.521 1.15 0 2.036-.252 2.65-.521.307-.134.544-.271.711-.381a3.344 3.344 0 0 0 .261-.19l.022-.018.008-.007.003-.003.002-.001c.001-.001.002-.001-.657-.754l.659.753a1 1 0 0 0-1.306-1.515l-.008.006a2.827 2.827 0 0 1-.496.278c-.385.168-1 .353-1.849.353-.85 0-1.464-.185-1.85-.354a2.824 2.824 0 0 1-.495-.277l-.008-.006ZM12 8a1 1 0 0 1 1 1v3a1.5 1.5 0 0 1-1.5 1.5H11a1 1 0 1 1 0-2V9a1 1 0 0 1 1-1Z"
      fill="#8C8CA1"
    />
  </Svg>
);

export default SvgFaceId;
