import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Template, Industry, TemplateStyle } from '../types';

interface TemplateFilters {
  industry: Industry | 'all';
  style: TemplateStyle | 'all';
  orientation: 'horizontal' | 'vertical' | 'all';
  premium: boolean | 'all';
  search: string;
  color: string;
}

interface TemplateStore {
  favorites: string[];
  recentlyUsed: string[];
  filters: TemplateFilters;

  toggleFavorite: (id: string) => void;
  addRecentlyUsed: (id: string) => void;
  setFilter: <K extends keyof TemplateFilters>(key: K, value: TemplateFilters[K]) => void;
  resetFilters: () => void;
}

const defaultFilters: TemplateFilters = {
  industry: 'all',
  style: 'all',
  orientation: 'all',
  premium: 'all',
  search: '',
  color: '',
};

export const useTemplateStore = create<TemplateStore>()(
  persist(
    (set) => ({
      favorites: [],
      recentlyUsed: [],
      filters: defaultFilters,

      toggleFavorite: (id) =>
        set((s) => ({
          favorites: s.favorites.includes(id)
            ? s.favorites.filter((f) => f !== id)
            : [...s.favorites, id],
        })),

      addRecentlyUsed: (id) =>
        set((s) => ({
          recentlyUsed: [id, ...s.recentlyUsed.filter((r) => r !== id)].slice(0, 12),
        })),

      setFilter: (key, value) =>
        set((s) => ({ filters: { ...s.filters, [key]: value } })),

      resetFilters: () => set({ filters: defaultFilters }),
    }),
    { name: 'cbs-template-store' }
  )
);
