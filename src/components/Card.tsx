import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import useScale from '../hooks/useScale';
import { colors } from '../theme';

// Props definition for supporting variant styles
interface CardProps {
  variant?: 'header' | 'light';
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

// Card component for supporting customizable variant styles
export default function Card({ variant = 'light', children, style }: CardProps) {
  const s = useScale();
  const isHeader = variant === 'header';
  const gradient: readonly [string, string, ...string[]] = isHeader // colors based on active variant
    ? [colors.headerTop, colors.headerMid, colors.headerBottom]
    : [colors.white, colors.white, colors.mintFade];

  return (
    <View
      style={[
        styles.shell,
        {
          borderRadius: s(32),
          borderWidth: isHeader ? 2 : 1.5,
          borderColor: colors.border,
        },
        style,
      ]}
    >
      <LinearGradient
        colors={gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      {children}
    </View>
  );
}

//Stylesheet configuration for card container
const styles = StyleSheet.create({
  shell: { overflow: 'hidden', backgroundColor: colors.white },
});
