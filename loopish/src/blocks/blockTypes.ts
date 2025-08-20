import type { BlockType } from '../store/schema';

export const blockTypeLabels: Record<BlockType, string> = {
  text: 'Text',
  todo: 'Todo',
  table: 'Table',
  whiteboard: 'Whiteboard',
  flow: 'Flowchart'
};
