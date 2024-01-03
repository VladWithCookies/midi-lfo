import { FormProvider } from 'react-hook-form';

export default function Form({ onSubmit, form, children, ...props }) {
  return (
    <FormProvider {...form}>
      <form
        {...props}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
}
