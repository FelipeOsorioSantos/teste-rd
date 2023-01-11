import { useClientSidePersist } from '../../hooks/useClientSidePersist';
import { useAnaliseCreditoStore } from '../../store/useAnaliseCreditoStore';
import { Analise1 } from './steps/Analise1';
import { Analise2 } from './steps/Analise2';
import { Analise3 } from './steps/Analise3';

export const FormAnaliseCredito = () => {
  const { analiseCreditoStep: clientStep } = useAnaliseCreditoStore();
  const analiseCreditoStep = useClientSidePersist(clientStep);

  switch (analiseCreditoStep) {
    case 1:
      return <Analise1 />;
    case 2:
      return <Analise2 />;
    case 3:
      return <Analise3 />;
    default:
      return <Analise1 />;
  }
};
