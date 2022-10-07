import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgClipboardCheck = (props: SvgProps) => (
  <Svg viewBox="0 0 20 20" fill="currentColor" {...props}>
    <Path d="M9 2a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2H9z" />
    <Path
      fillRule="evenodd"
      d="M4 5a2 2 0 0 1 2-2 3 3 0 0 0 3 3h2a3 3 0 0 0 3-3 2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm9.707 5.707a1 1 0 0 0-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z"
      clipRule="evenodd"
    />
  </Svg>
);

export default SvgClipboardCheck;
