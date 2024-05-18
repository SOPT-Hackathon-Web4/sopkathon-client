import { useMemo, useState } from 'react';
import { NonEmptyArray } from '@typings/commonType';
import { Funnel, FunnelProps, Step } from 'src/components/@common/Funnel/Funnel';

export const useFunnel = <Steps extends NonEmptyArray<string>>(steps: Steps, defaultStep: Steps[number]) => {
  const [step, setStep] = useState<Steps[number]>(defaultStep);

  const FunnelComponent = useMemo(
    () =>
      Object.assign(
        (props: Omit<FunnelProps<Steps>, 'step' | 'steps'>) => <Funnel<Steps> step={step} steps={steps} {...props} />,
        { Step }
      ),
    [step, steps]
  );

  return { Funnel: FunnelComponent, step, setStep };
};
