import { useFormContext } from 'react-hook-form';

export default function Switch({ name, label, options = [] }) {
  const { register } = useFormContext();

  return (
    <div>
      <p className="font-bold">
        {label}
      </p>
      <div className="flex flex-col gap-2 mt-2">
        {options.map((option, index) => (
          <div
            key={`${name}-${index}`}
            className="flex gap-2"
          >
            <input
              id={option.value}
              type="radio"
              value={option.value}
              {...register(name)}
            />
            <label htmlFor={option.value}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
