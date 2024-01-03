import { useFormContext } from 'react-hook-form';

export default function Select({ name, label, options = [] }) {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col">
      <label className="font-bold">
        {label}
      </label>
      <select
        className="h-8 px-2 mt-2"
        {...register(name)}
      >
        {options.map(({ value, label }) => (
          <option
            key={value}
            value={value}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
