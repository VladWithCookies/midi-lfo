import { useFormContext } from 'react-hook-form';

export default function Fader({ name, label, max }) {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="font-bold"
      >
        {label}
      </label>
      <input
        id={name}
        type="range"
        max={max}
        {...register(name)}
      />
    </div>
  );
}
