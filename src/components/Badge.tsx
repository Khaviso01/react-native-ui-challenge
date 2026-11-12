import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import useScale from '../hooks/useScale';
import { colors, fonts } from '../theme';

// Interface for app badges
interface BadgeProps {
  count: number;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

// scale base size dimension
export default function Badge({ count, size = 20, style }: BadgeProps) {
  const s = useScale();
  const px = s(size);
  return (
    <View
      style={[
        styles.badge,
        { minWidth: px, height: px, borderRadius: px / 2, paddingHorizontal: s(4) },
        style,
      ]}
    >
      <Text style={[styles.text, { fontSize: s(12) }]}>{count}</Text>
    </View>
  );
}

// Stylesheet config for badges
const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.lime,
    borderWidth: 1.5,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { fontFamily: fonts.medium, color: colors.ink },
});