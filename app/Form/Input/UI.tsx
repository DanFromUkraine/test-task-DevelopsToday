import clsx from "clsx";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useInputType } from "./client";

export function ToggleVisibilityButtonUI({
  toggleInputType,
  isPasswordButtonVisible,
  currentInputType,
}: ReturnType<typeof useInputType>) {
  return (
    <button
      onClick={toggleInputType}
      type="button"
      className={clsx("text-xl", { hidden: !isPasswordButtonVisible })}
    >
      {currentInputType === "password" ? <FaEyeSlash /> : <FaEye />}
    </button>
  );
}

export function InputNameUI() {
  return (
    <h4 className="absolute -top-4 left-8 px-2 font-semibold bg-white">
      Some input
    </h4>
  );
}

export function ClearButtonUI({
  clear,
  clearable,
}: {
  clear: () => void;
  clearable: boolean;
}) {
  return (
    <button
      type="button"
      onClick={clear}
      className={clsx({ hidden: !clearable })}
    >
      <IoClose className="text-xl" />
    </button>
  );
}

