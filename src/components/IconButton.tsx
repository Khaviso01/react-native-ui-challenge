import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import useScale from '../hooks/useScale';
import type { PressState } from '../types';

// Props definition for the reusable IconButton component supporting optional badges.
interface IconButtonProps {
  children: ReactNode;
  onPress?: () => void;
  badge?: ReactNode;
  size?: number;
  label?: string;
}