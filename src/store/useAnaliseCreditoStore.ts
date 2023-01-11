import create from 'zustand';
import { persist } from 'zustand/middleware';

interface AnaliseCreditoForm {
  valor: number;
  motivo: string;
  authPolicy?: boolean;
  authTerms?: boolean;
  authSCR?: boolean;
}
interface IAnaliseCreditoStore {
  analiseCreditoForm: AnaliseCreditoForm;
  analiseCreditoStep: number;
  setAnaliseCreditoForm: (value: AnaliseCreditoForm) => void;
  setAnaliseCreditoStep: (value: number) => void;
  clearAnaliseCreditoStore: () => void;
  [x: string]: any;
}

const emptyAnaliseCredito: AnaliseCreditoForm = {
  valor: 0,
  motivo: '',
  authPolicy: false,
  authTerms: false,
  authSCR: false,
};

export const useAnaliseCreditoStore = create<IAnaliseCreditoStore>()(
  persist(
    (set) => ({
      analiseCreditoForm: emptyAnaliseCredito,
      analiseCreditoStep: 1,
      setAnaliseCreditoForm: (value) =>
        set((state) => ({ ...state, analiseCreditoForm: value })),
      setAnaliseCreditoStep: (value) =>
        set((state) => ({ ...state, analiseCreditoStep: value })),
      clearAnaliseCreditoStore: () => {
        set((state) => ({
          analiseCreditoStep: 1,
          analiseCreditoForm: emptyAnaliseCredito,
        }));
      },
    }),
    {
      name: 'analise-credito', // unique name
      // a fix for hydratation error that happens after using the auth value from above
      // https://github.com/pmndrs/zustand/issues/938#issuecomment-1141402342
      getStorage: () => ({
        setItem: (...args) => window.localStorage.setItem(...args),
        removeItem: (...args) => window.localStorage.removeItem(...args),
        getItem: async (...args) =>
          new Promise((resolve) => {
            if (typeof window === 'undefined') {
              resolve(null);
            } else {
              setTimeout(() => {
                resolve(window.localStorage.getItem(...args));
              }, 0);
            }
          }),
      }),
    },
  ),
);
