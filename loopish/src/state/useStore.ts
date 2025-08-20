import { create } from 'zustand';
import { v7 as uuidv7 } from 'uuid';
import type { Page } from '../types';

interface LoopishState {
  pages: Record<string, Page>;
  addPage: (title: string) => string;
}

export const useStore = create<LoopishState>((set) => ({
  pages: {},
  addPage: (title) => {
    const id = uuidv7();
    const now = Date.now();
    const page: Page = { id, title, blocks: [], createdAt: now, updatedAt: now };
    set((state) => ({ pages: { ...state.pages, [id]: page } }));
    return id;
  },
}));
