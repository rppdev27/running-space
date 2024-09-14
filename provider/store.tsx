

// Directory: /app/bears/_store/index.ts
import { create } from 'zustand';

// State types
interface States {
  bears: String;
}

// useBearStore
export const useBearStore = create<States>(() => ({
  bears: 'Pradipta Putra',
}));