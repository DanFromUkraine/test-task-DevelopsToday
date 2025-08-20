"use client";

import { useCallback, useState } from "react";
import { useFormContext } from "react-hook-form";
import { AvailableInputTypes } from "./types";
import { ClearButtonUI } from "@/app/lib/commonComponents/clearButton";

export function useInputType(defaultInputType: AvailableInputTypes) {
  const isPasswordButtonVisible = defaultInputType === "password";
  const [currentInputType, setCurrentInputType] = useState(
    () => defaultInputType
  );

  const toggleInputType = useCallback(() => {
    console.log("click");

    setCurrentInputType((prev) => {
      console.log({ prev });
      return prev === defaultInputType ? "text" : defaultInputType;
    });
  }, []);

  return { isPasswordButtonVisible, toggleInputType, currentInputType };
}

export function ClearButton({ clearable }: { clearable: boolean }) {
  const { reset } = useFormContext();
  const clear = () => {
    reset({ someInput: "" });
  };

  return <ClearButtonUI {...{ clear, clearable }} />;
}

export function InputBody({ currentInputType }: { currentInputType: string }) {
  const { register } = useFormContext();

  return (
    <input
      type={currentInputType}
      placeholder="Some placeholder"
      {...register("someInput")}
      className="w-full focus-within:outline-0"
    />
  );
}
