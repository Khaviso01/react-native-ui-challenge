import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Avatar from './Avatar';
import useScale from '../hooks/useScale';
import { colors, fonts } from '../theme';
import type { Contact, PressState } from '../types';

// Props definition for ContactChips
interface ContactChipProps {
  contact: Contact;
  onPress?: (contact: Contact) => void;
}
