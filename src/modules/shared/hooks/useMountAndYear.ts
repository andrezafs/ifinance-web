import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  year: number;
  month: number;
  setDate: (value: Date) => void;
  getDate: () => Date;
};

export const useMountAndYear = create(
  persist<State>(
    (set, get) => ({
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      setDate: value => {
        set({ year: value.getFullYear(), month: value.getMonth() + 1 });
      },
      getDate: () => new Date(get().year, get().month - 1),
    }),
    {
      name: '@finances:mountAndYear',
      partialize: state => ({ year: state.year, month: state.month }) as State,
    },
  ),
);
