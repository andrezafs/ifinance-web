import { create } from 'zustand';

type State = {
  year: number;
  month: number;
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
};

export const useMountAndYear = create<State>(set => ({
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  setYear: year => set({ year }),
  setMonth: month => set({ month }),
}));
