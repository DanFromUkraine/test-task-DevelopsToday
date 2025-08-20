import ShowToastButton from "./ShowToastButton";
import ToastBody, { ToastBodyProps } from "./ToastBody";
import ToastContextProvider from "./ToastContext/provider";

export default function Toast(forwardProps: ToastBodyProps) {
  return (
    <ToastContextProvider>
      <div className="flex flex-col gap-8 ">
        <ToastSectionHeading />
        <ShowToastButton />
        <ToastBody {...forwardProps} />
      </div>
    </ToastContextProvider>
  );
}

function ToastSectionHeading() {
  return (
    <h2 className="text-xl font-bold pt-10">And this is toast section :)</h2>
  );
}
