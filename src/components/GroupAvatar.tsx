import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';
import useScale from '../hooks/useScale';
import { colors, fonts } from '../theme';
import type { GroupChat } from '../types';

interface GroupAvatarProps {
  members: GroupChat['members'];
  extra: number;
  size?: number;
}

/** Rounded-square group avatar: member faces overlap the corners around a "+N" counter. */
export default function GroupAvatar({ members, extra, size = 80 }: GroupAvatarProps) {
  const s = useScale();
  const k = size / 80; // positions below are authored for an 80pt square
  const px = s(size);
  const [topLeft, topRight, bottomLeft, centre] = members;

  const place = (left: number, top: number) => ({
    position: 'absolute' as const,
    left: s(left * k),
    top: s(top * k),
  });

  return (
    <View style={{ width: px, height: px }}>
      <View style={[styles.square, { borderRadius: s(24) }]} />
      <View style={place(8, -12)}>
        <Avatar source={topLeft} size={26 * k} bg="transparent" />
      </View>
      <View style={place(58, -12)}>
        <Avatar source={topRight} size={36 * k} bg="transparent" />
      </View>
      <View style={place(-6, 42)}>
        <Avatar source={bottomLeft} size={38 * k} bg="transparent" />
      </View>
      <View style={place(18, 15)}>
        <Avatar source={centre} size={39 * k} bg="transparent" />
      </View>
      <Text style={[styles.extra, { fontSize: s(15), left: s(44 * k), top: s(44 * k) }]}>
        +{extra}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  square: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.groupBg,
  },
  extra: { position: 'absolute', fontFamily: fonts.semibold, color: colors.ink },
});