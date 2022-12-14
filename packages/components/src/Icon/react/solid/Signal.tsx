import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSignal = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <Path
      fillRule="evenodd"
      d="M5.636 4.575a.75.75 0 0 1 0 1.06 9 9 0 0 0 0 12.729.75.75 0 0 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.749 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06zM7.757 6.696a.75.75 0 0 1 0 1.061 6 6 0 0 0 0 8.485.75.75 0 0 1-1.06 1.061 7.5 7.5 0 0 1 0-10.607.75.75 0 0 1 1.06 0zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.607.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06zM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.06 4.5 4.5 0 0 1 0-6.363.75.75 0 0 1 1.06 0zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.244.75.75 0 0 1 0-1.06zM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSignal;
