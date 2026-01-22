import { create } from 'zustand';

export const useStore = create((set) => ({
  selectedProject: null,
  setSelectedProject: (project) => set({ selectedProject: project }),
  closeModal: () => set({ selectedProject: null }),
}));
