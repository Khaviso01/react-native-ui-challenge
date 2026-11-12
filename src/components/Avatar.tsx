import { useWindowDimensions } from 'react-native';
import { DESIGN_WIDTH, MAX_CONTENT_WIDTH } from '../theme';

export type Scale = ((n: number) => number) & { factor: number; contentWidth: number };