import type { ImageSourcePropType, PressableStateCallbackType } from 'react-native';

export type PressState = PressableStateCallbackType & { hovered?: boolean };

export type AvatarColor = 'purple' | 'yellow' | 'green' | 'pink';

export interface Contact {
  id: string;
  name: string;
  online: boolean;
  image: ImageSourcePropType;
  fallback: string;
}

export interface RecentChat {
  id: string;
  name: string;
  preview: string;
  time: string;
  unread?: number;
  online?: boolean;
  voice?: boolean;
  bg: AvatarColor;
  image: ImageSourcePropType;
  fallback: string;
}

export interface GroupChat {
  id: string;
  name: string;
  preview: string;
  time: string;
  unread?: number;
  extra: number;
  members: [ImageSourcePropType, ImageSourcePropType, ImageSourcePropType, ImageSourcePropType];
}