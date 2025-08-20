export type Page = {
  id: string;
  title: string;
  blocks: string[];
  createdAt: number;
  updatedAt: number;
};

export type TextBlock = {
  id: string;
  type: 'text';
  content: string; // Rich text JSON placeholder
};

export type ChecklistBlock = {
  id: string;
  type: 'checklist';
  items: { id: string; text: string; checked: boolean }[];
};

export type KanbanBlock = {
  id: string;
  type: 'kanban';
  lanes: {
    id: string;
    title: string;
    cards: { id: string; text: string }[];
  }[];
};

export type ProgressBlock = {
  id: string;
  type: 'progress';
  spec: { target: number; value: number; mode: 'ring' | 'bar' };
};

export type ChartBlock = {
  id: string;
  type: 'chart';
  spec: unknown; // VegaLiteSpec | EChartsOption
  dataRef?: string;
};

export type CanvasBlock = {
  id: string;
  type: 'canvas';
  shapes: unknown[];
  edges: unknown[];
  camera: { x: number; y: number; z: number };
};

export type Block =
  | TextBlock
  | ChecklistBlock
  | KanbanBlock
  | ProgressBlock
  | ChartBlock
  | CanvasBlock;
