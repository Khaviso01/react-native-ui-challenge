import React from 'react';
import { Alert, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Card from '../components/Card';
import Header from '../components/Header';
import ContactsRow from '../components/ContactsRow';
import SectionLabel from '../components/SectionLabel';
import ChatItem from '../components/ChatItem';
import Avatar from '../components/Avatar';
import GroupAvatar from '../components/GroupAvatar';
import useScale from '../hooks/useScale';
import { colors, MAX_CONTENT_WIDTH } from '../theme';
import { contacts, groupChats, recentChats } from '../data/chats';

// Helper function to trigger cross-platform alerts
const notify = (message: string): void => {
  if (Platform.OS === 'web') window.alert(message);
  else Alert.alert('Chats', message);
};

// notification count 
const NOTIFICATIONS = 6;