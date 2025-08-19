"use client";

import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import { FormHeadingUI } from "./UI";

interface FormFields {
  someInput: string;
}

export default function Form() {
  const methods = useForm<FormFields>({
    defaultValues: {
      someInput: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-8 border-y py-8 border-black">
        <FormHeadingUI />
        <Input inputType="password" clearable={true} />
      </form>
    </FormProvider>
  );
}
