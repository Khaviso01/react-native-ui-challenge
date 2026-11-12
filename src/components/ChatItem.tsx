import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Badge from './Badge';
import useScale from '../hooks/useScale';
import { colors, fonts } from '../theme';
import type { PressState } from '../types';

// Props definition for the ChatItem row component
interface ChatItemProps {
  leading: ReactNode;
  name: string;
  preview: string;
  time: string;
  unread?: number;
  voice?: boolean;
  onPress?: () => void;
}

//ChatItem to represent and individual message list
export default function ChatItem({ leading, name, preview, time, unread, voice, onPress }: ChatItemProps) {
  const s = useScale();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Open chat ${name}`}
      style={({ pressed, hovered }: PressState) => [
        styles.row,
        {
          paddingLeft: s(21),
          paddingRight: s(16),
          paddingVertical: s(8),
          backgroundColor: pressed || hovered ? colors.rowPressed : 'transparent',
        },
      ]}
    >
      {leading}

      <View style={[styles.body, { marginLeft: s(14) }]}>
        <View style={styles.line}>
          <Text numberOfLines={1} style={[styles.name, { fontSize: s(20), lineHeight: s(24) }]}>
            {name}
          </Text>
          <Text style={[styles.time, { fontSize: s(14), marginLeft: s(8) }]}>{time}</Text>
        </View>

        <View style={[styles.line, { marginTop: s(6) }]}>
          <View style={styles.previewWrap}>
            {voice && (
              <Ionicons
                name="play-circle"
                size={s(20)}
                color={colors.ink}
                style={{ marginRight: s(6) }}
              />
            )}
            <Text
              numberOfLines={2}
              style={[
                styles.preview,
                { fontSize: s(14.5), lineHeight: s(20), maxWidth: s(228) },
                voice && styles.voice,
              ]}
            >
              {preview}
            </Text>
          </View>
          {unread ? <Badge count={unread} /> : null}
        </View>
      </View>
    </Pressable>
  );
}