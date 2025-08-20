export type BlockType = 'text' | 'todo' | 'table' | 'whiteboard' | 'flow';

export interface Block {
  id: string;
  type: BlockType;
  props: Record<string, any>;
  children: string[];
  parentId: string | null;
}

export interface Page {
  id: string;
  title: string;
  rootIds: string[];
}
