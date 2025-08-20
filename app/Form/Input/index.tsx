"use client";

import { ClearButton, InputBody, useInputType } from "./client";
import { AvailableInputTypes } from "./types";
import { InputNameUI, ToggleVisibilityButtonUI } from "./UI";

export type InputContainerProps = {
  inputType: AvailableInputTypes;
  clearable: boolean;
};

export default function InputContainer({
  inputType,
  clearable,
}: InputContainerProps) {
  const { currentInputType, toggleInputType, isPasswordButtonVisible } =
    useInputType(inputType);

  return (
    <div className="flex relative gap-2 w-96 h-12 px-4 rounded-md border border-gray-500 ">
      <InputNameUI />
      <InputBody currentInputType={currentInputType} />

      <ToggleVisibilityButtonUI
        {...{ currentInputType, toggleInputType, isPasswordButtonVisible }}
      />
      <ClearButton clearable={clearable} />
    </div>
  );
}
