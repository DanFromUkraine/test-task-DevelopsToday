"use client";

import Image from "next/image";
import { useToastContext } from "../ToastContext/context";
import clsx from "clsx";
import { useEffect } from "react";

function useHideToastBodyOnTimeout({
  toastAppearenceDuration,
  toastVisible,
  hideToast,
}: {
  toastAppearenceDuration: number;
  toastVisible: boolean;
  hideToast: () => void;
}) {
  useEffect(() => {
    if (toastVisible) {
      setTimeout(() => {
        hideToast();
      }, toastAppearenceDuration);
    }
  }, [toastVisible]);
}

export default function ToastBody(
  {
    toastAppearenceDuration,
  }: {
    toastAppearenceDuration: number;
  } = { toastAppearenceDuration: 5_000 }
) {
  const { toastVisible, hideToast } = useToastContext();
  useHideToastBodyOnTimeout({
    toastAppearenceDuration,
    toastVisible,
    hideToast,
  });

  return (
    <div
      className={clsx(
        "toast w-full h-fit border-2 border-black rounded-xl p-8",
        {
          "animate-toast-out": !toastVisible,
          "animate-toast-in": toastVisible,
        }
      )}
    >
      <ToastBodyHeading />
      <ToastBodyContent />
    </div>
  );
}

function ToastBodyHeading() {
  return <h3 className="text-xl font-bold">Hello!!! Toast is ready!!</h3>;
}

function ToastBodyContent() {
  return (
    <div className="flex flex-col w-full h-full ">
      <p>Content:</p>
      <Image
        src="/cat.png"
        alt="Sitting cat"
        className="w-full"
        width={250}
        height={170}
      />
    </div>
  );
}
