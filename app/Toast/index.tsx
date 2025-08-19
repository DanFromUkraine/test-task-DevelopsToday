import ShowToastButton from "./ShowToastButton";
import ToastBody from "./ToastBody";
import ToastContextProvider from "./ToastContext/provider";

export default function Toast() {
  return (
    <ToastContextProvider>
      <div className="flex flex-col gap-8 ">
        <ToastSectionHeading />
        <ShowToastButton />
        <ToastBody toastAppearenceDuration={5_000} />
      </div>
    </ToastContextProvider>
  );
}

function ToastSectionHeading() {
  return (
    <h2 className="text-xl font-bold pt-10">And this is toast section :)</h2>
  );
}
