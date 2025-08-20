import {
  ClearButtonUI,
  ClearButtonUIProps,
} from "@/app/lib/commonComponents/clearButton";
import Image from "next/image";

export function ToastBodyHeadingUI(forwardProps: ClearButtonUIProps) {
  return (
    <div className="flex justify-between">
      <h3 className="text-xl font-bold">Hello!!! Toast is ready!!</h3>
      <ClearButtonUI {...forwardProps} />
    </div>
  );
}

export function ToastBodyContentUI() {
  return (
    <div className="flex flex-col w-full h-full ">
      <p>Content:</p>
      <Image
        src="/cat.png"
        alt="Sitting cat"
        className="w-full"
        width={250}
        height={170}
        priority={false}
      />
    </div>
  );
}
