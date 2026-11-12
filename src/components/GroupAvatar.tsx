import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';
import useScale from '../hooks/useScale';
import { colors, fonts } from '../theme';
import type { GroupChat } from '../types';

// Props definition for the GroupAvatar component managing member avatars and overflow count
interface GroupAvatarProps {
  members: GroupChat['members'];
  extra: number;
  size?: number;
}

// 
export default function GroupAvatar({ members, extra, size = 80 }: GroupAvatarProps) {
  const s = useScale();
  // Calculate scaling multiplier based on target size relative to base design
  const k = size / 80;
  // member avatars URIs
  const [topLeft, topRight, bottomLeft, centre] = members;

  // helper to calculate absolute positioning scaled by factor k
  const place = (left: number, top: number) => ({
    position: 'absolute' as const,
    left: s(left * k),
    top: s(top * k),
  });

  return (
    <View style={{ width: px, height: px }}>
      <View style={[styles.square, { borderRadius: s(24) }]} />
      <View style={place(8, -12)}>
        <Avatar uri={topLeft} size={26 * k} bg="#F4F1E4" />
      </View>
      <View style={place(58, -12)}>
        <Avatar uri={topRight} size={28 * k} bg="transparent" />
      </View>
      <View style={place(-6, 42)}>
        <Avatar uri={bottomLeft} size={28 * k} bg="#3A3A3A" />
      </View>
      <View style={place(18, 15)}>
        <Avatar uri={centre} size={34 * k} bg="transparent" />
      </View>
      <Text style={[styles.extra, { fontSize: s(15), left: s(44 * k), top: s(44 * k) }]}>
        +{extra}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  square: { ...StyleSheet.absoluteFillObject, backgroundColor: colors.groupBg },
  extra: { position: 'absolute', fontFamily: fonts.semibold, color: colors.ink },
});
