import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IconButton from './IconButton';
import Badge from './Badge';
import useScale from '../hooks/useScale';
import { colors, fonts } from '../theme';

interface HeaderProps {
  title: string;
  notifications: number;
  onBack?: () => void;
  onProfile?: () => void;
}