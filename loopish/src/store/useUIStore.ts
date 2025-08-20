import { create } from 'zustand';

interface UIState {
  selected: string | null;
  setSelected: (id: string | null) => void;
}

export const useUIStore = create<UIState>(set => ({
  selected: null,
  setSelected: id => set({ selected: id })
}));
