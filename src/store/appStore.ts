import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ThemeMode, User, DashboardStats } from '../types';

interface AppState {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;

  user: User | null;
  setUser: (user: User | null) => void;

  sidebarCollapsed: boolean;
  toggleSidebar: () => void;

  stats: DashboardStats;
  setStats: (stats: DashboardStats) => void;

  notifications: number;
  setNotifications: (count: number) => void;
}

const defaultStats: DashboardStats = {
  totalDesigns: 24,
  totalDownloads: 847,
  totalQRScans: 3241,
  totalViews: 12560,
  activeProjects: 6,
  teamMembers: 4,
};

const mockUser: User = {
  id: 'user-001',
  name: 'Vivek Sawji',
  email: 'vivek@cardbuilderstudio.com',
  avatar: undefined,
  role: 'owner',
  plan: 'pro',
  createdAt: '2024-01-15T10:00:00Z',
  digitalCardSlug: 'viveksawji',
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      toggleTheme: () => {
        const next = get().theme === 'light' ? 'dark' : 'light';
        set({ theme: next });
        document.documentElement.setAttribute('data-theme', next);
      },
      setTheme: (theme) => {
        set({ theme });
        document.documentElement.setAttribute('data-theme', theme);
      },

      user: mockUser,
      setUser: (user) => set({ user }),

      sidebarCollapsed: false,
      toggleSidebar: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),

      stats: defaultStats,
      setStats: (stats) => set({ stats }),

      notifications: 3,
      setNotifications: (count) => set({ notifications: count }),
    }),
    {
      name: 'cbs-app-store',
      partialize: (state) => ({ theme: state.theme, sidebarCollapsed: state.sidebarCollapsed }),
    }
  )
);
