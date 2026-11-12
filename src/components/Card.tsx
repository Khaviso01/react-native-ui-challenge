import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import useScale from '../hooks/useScale';
import { colors } from '../theme';

interface CardProps {
  variant?: 'header' | 'light';
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}