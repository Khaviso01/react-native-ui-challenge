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