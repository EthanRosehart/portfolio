import * as Y from 'yjs';
import { IndexeddbPersistence } from 'y-indexeddb';
import { WebrtcProvider } from 'y-webrtc';
import type { Block, Page } from './schema';

export const doc = new Y.Doc();
export const pages = doc.getMap<Page>('pages');
export const blocks = doc.getMap<Block>('blocks');

new IndexeddbPersistence('loopish', doc);

const room = import.meta.env.VITE_ROOM_ID;
const signaling = import.meta.env.VITE_SIGNALING;
if (room && signaling) {
  // TODO: enable WebRTC collaboration when env vars are provided
  new WebrtcProvider(room, doc, { signaling: [signaling] });
}
