import create from 'zustand';

interface SelectContentState {
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  deleteAccessToken: () => void;
}

const useAuthStore = create<SelectContentState>((set) => ({
  accessToken: window.sessionStorage.getItem('accessToken')
    ? window.sessionStorage.getItem('accessToken')
    : '',
  setAccessToken: (token) => {
    set((state) => ({ ...state, accessToken: token }));
  },
  deleteAccessToken: () => {
    set((state) => ({ ...state, accessToken: '' }));
  },
}));

export default useAuthStore;
