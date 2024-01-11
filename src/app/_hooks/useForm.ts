import {ChangeEventHandler, useState} from "react";

export function useForm<T>(initialForm: T) {
  const [form, setForm] = useState(initialForm);

  const onChangeForm: ChangeEventHandler<HTMLInputElement> = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const resetForm = () => {
    setForm((initialForm))
  }

  return {form, onChangeForm, resetForm};

}