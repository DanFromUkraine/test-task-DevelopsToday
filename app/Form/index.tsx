"use client";

import { FormProvider, useForm } from "react-hook-form";
import Input, { InputContainerProps } from "./Input";
import { FormHeadingUI } from "./UI";

interface FormFields {
  someInput: string;
}

export default function Form({ clearable, inputType }: InputContainerProps) {
  const methods = useForm<FormFields>({
    defaultValues: {
      someInput: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-8 border-y py-8 border-black">
        <FormHeadingUI />
        <Input inputType={inputType} clearable={clearable} />
      </form>
    </FormProvider>
  );
}
