import React from 'react';
import { ScrollView } from 'react-native';
import ContactChip from './ContactChip';
import useScale from '../hooks/useScale';
import type { Contact } from '../types';


// Props definition for the ContactRow horizontal scrolling
interface ContactsRowProps {
  contacts: Contact[];
  onPress?: (contact: Contact) => void;
}