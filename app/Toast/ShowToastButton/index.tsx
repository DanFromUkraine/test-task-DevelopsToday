"use client";

import { useToastContext } from "../ToastContext/context";

export default function ShowToastButton() {
  const { toastVisible, showToast } = useToastContext();

  return (
    <button
      disabled={toastVisible}
      onClick={showToast}
      className="bg-black px-7 py-2 w-full max-w-52 rounded-md text-white hover:bg-white border hover:border-black hover:text-black duration-200"
    >
      Show toast
    </button>
  );
}
