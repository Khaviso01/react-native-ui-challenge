import type { Contact, GroupChat, RecentChat } from '../types';

const avatar = (seed: string): string =>
  `https://api.dicebear.com/7.x/avataaars/png?seed=${encodeURIComponent(seed)}&size=200`;

export const contacts: Contact[] = [
  { id: 'c1', name: 'Mira', online: true, image: avatar('Mira'), fallback: '👩' },
  { id: 'c2', name: 'Phill', online: true, image: avatar('Phill'), fallback: '🧑' },
  { id: 'c3', name: 'Mike', online: false, image: avatar('Mike'), fallback: '👨' },
  { id: 'c4', name: 'Kierra', online: false, image: avatar('Kierra'), fallback: '👱‍♀️' },
];