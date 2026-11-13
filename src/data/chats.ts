import type { Contact, GroupChat, RecentChat } from '../types';

const avatars = {
  mira: require('../../assets/mira.png'),
  phill: require('../../assets/phillip.png'),
  mike: require('../../assets/mike.png'),
  kierra: require('../../assets/kierra.png'),
  stacey: require('../../assets/stacey.png'),
  kate: require('../../assets/kate.png'),
  kevin: require('../../assets/kevin.png'),
  leo: require('../../assets/leo.png')
};

export const contacts: Contact[] = [
  { id: 'c1', name: 'Mira', online: true, image: avatars.mira, fallback: '👩' },
  { id: 'c2', name: 'Phill', online: true, image: avatars.phill, fallback: '🧑' },
  { id: 'c3', name: 'Mike', online: false, image: avatars.mike, fallback: '👨' },
  { id: 'c4', name: 'Kierra', online: false, image: avatars.kierra, fallback: '👱‍♀️' },
];

export const recentChats: RecentChat[] = [
  {
    id: 'r1',
    name: 'Phillip Geidt',
    preview: 'Phillip is typing...',
    time: '11:34',
    unread: 6,
    online: true,
    bg: 'purple',
    image: avatars.phill,
    fallback: '🧑‍🎨',
  },
  {
    id: 'r2',
    name: 'Kierra from Match',
    preview: 'Voice message',
    voice: true,
    time: '11:05',
    unread: 2,
    bg: 'yellow',
    image: avatars.kierra,
    fallback: '👱‍♀️',
  },
  {
    id: 'r3',
    name: 'Mike Smith',
    preview: 'Yes, put my name down in that list of the donations.',
    time: '10:31',
    bg: 'green',
    image: avatars.mike,
    fallback: '👨',
  },
  {
    id: 'r4',
    name: 'Stacey Neighbor',
    preview: 'Hi! Her mom already used it',
    time: '08:12',
    bg: 'pink',
    image: avatars.stacey,
    fallback: '👩‍🦰',
  },
];

export const groupChats: GroupChat[] = [
  {
    id: 'g1',
    name: 'Kevin’s BP',
    preview: 'Kate and Ann are typing...',
    time: '12:32',
    unread: 6,
    extra: 6,
    members: [avatars.mira, avatars.leo, avatars.kate, avatars.kevin],
  },
];