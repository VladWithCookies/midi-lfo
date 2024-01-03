import { useForm } from 'react-hook-form';

import { WAVE_OPTIONS, TARGET_OPTIONS } from './constants';
import useInterval from './hooks/useInterval';
import useMIDI from './hooks/useMIDI';
import Form from './components/Form';
import Select from './components/Select';
import Switch from './components/Switch';
import Fader from './components/Fader';
import './index.css';

export default function App() {
  const form = useForm({
    defaultValues: {
      target: TARGET_OPTIONS[0].value,
      wave: WAVE_OPTIONS[1].value,
      rate: 0,
      depth: 0,
    },
  });

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
        max={1024}
      />
      <Fader
        name="depth"
        label="Depth"
        max={1024}
      />
    </Form>
  );
}
