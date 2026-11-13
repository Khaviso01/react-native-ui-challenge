import { useWindowDimensions } from 'react-native';
import { DESIGN_WIDTH, MAX_CONTENT_WIDTH, MAX_SCALE_WIDTH } from '../theme';

export type Scale = ((n: number) => number) & {
  factor: number;
  contentWidth: number;
  isWide: boolean;
};

export default function useScale(): Scale {
  const { width } = useWindowDimensions();
  const factor = Math.min(width, MAX_SCALE_WIDTH) / DESIGN_WIDTH;
  const contentWidth = Math.min(width, MAX_CONTENT_WIDTH);
  const scale = (n: number) => Math.round(n * factor * 10) / 10;
  return Object.assign(scale, { factor, contentWidth, isWide: width > 480 });
}