import { create } from 'zustand';
import { User, Cafe } from '../types';

interface AppState {
  user: User | null;
  token: string | null;
  cafes: Cafe[];
  selectedCafe: Cafe | null;
  searchLocation: { lat: number; lng: number } | null;
  requiresSubscription: boolean;

  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setCafes: (cafes: Cafe[]) => void;
  setSelectedCafe: (cafe: Cafe | null) => void;
  setSearchLocation: (location: { lat: number; lng: number } | null) => void;
  setRequiresSubscription: (requires: boolean) => void;
  logout: () => void;
}

const useStore = create<AppState>((set) => ({
  user: null,
  token: localStorage.getItem('token'),
  cafes: [],
  selectedCafe: null,
  searchLocation: null,
  requiresSubscription: false,

  setUser: (user) => set({ user }),
  setToken: (token) => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
    set({ token });
  },
  setCafes: (cafes) => set({ cafes }),
  setSelectedCafe: (cafe) => set({ selectedCafe: cafe }),
  setSearchLocation: (location) => set({ searchLocation: location }),
  setRequiresSubscription: (requires) => set({ requiresSubscription: requires }),
  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, token: null, cafes: [], selectedCafe: null });
  },
}));

export default useStore;
