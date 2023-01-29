import {useState} from 'react';

function useForm<T extends Object>(initialFormState: T) {
  const [form, setForm] = useState<T>(initialFormState);

  const onChange = <K extends Object>(value: K, field: keyof T) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return {...form, setForm, form, onChange};
}

export default useForm;
