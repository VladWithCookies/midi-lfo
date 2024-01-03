import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { WAVE_OPTIONS, TARGET_OPTIONS } from './constants';
import Modulator from './lib/Modulator';
import useInterval from './hooks/useInterval';
import useMIDI from './hooks/useMIDI';
import Form from './components/Form';
import Select from './components/Select';
import Switch from './components/Switch';
import Fader from './components/Fader';
import './index.css';

export default function App() {
  const { output } = useMIDI();
  const [modulator, setModulator] = useState(new Modulator(0, 0));

  const form = useForm({
    defaultValues: {
      target: TARGET_OPTIONS[0].value,
      wave: WAVE_OPTIONS[1].value,
      rate: 0,
      depth: 0,
    },
  });

  useInterval(() => {
    if (!output) return;

    const { rate, depth, target, wave } = form.getValues();

    if (!rate || !depth) return;

    const value = modulator[wave];
    const message = [176, target, value];

    output.send(message);
  }, 100);

  useEffect(() => {
    const subscription = form.watch(({ rate, depth }) => {
      setModulator(new Modulator(Number(depth), Number(rate)));
    });

    return () => subscription.unsubscribe();
  }, [form.watch]);

  return (
    <Form
      form={form}
      className="flex flex-col justify-center align-center gap-8 min-h-screen p-8"
    >
      <Select
        name="target"
        label="Target"
        options={TARGET_OPTIONS}
      />
      <Switch
        name="wave"
        label="Wave"
        options={WAVE_OPTIONS}
      />
      <Fader
        name="rate"
        label="Rate"
        max={100}
      />
      <Fader
        name="depth"
        label="Depth"
        max={127}
      />
    </Form>
  );
}
