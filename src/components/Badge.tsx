import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import useScale from '../hooks/useScale';
import { colors, fonts } from '../theme';

interface BadgeProps {
  count: number;
  size?: number;
  style?: StyleProp<ViewStyle>;
}
