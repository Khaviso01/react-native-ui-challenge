import { useWindowDimensions } from 'react-native';
import { DESIGN_WIDTH, MAX_CONTENT_WIDTH } from '../theme';

// Props definition for scale function utility
export type Scale = ((n: number) => number) & { factor: number; contentWidth: number };
