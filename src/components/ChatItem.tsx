import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Badge from './Badge';
import useScale from '../hooks/useScale';
import { colors, fonts } from '../theme';
import type { PressState } from '../types';

interface ChatItemProps {
  leading: ReactNode;
  name: string;
  preview: string;
  time: string;
  unread?: number;
  voice?: boolean;
  onPress?: () => void;
}