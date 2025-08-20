import Form from "./Form";
import Toast from "./Toast";

export default function page() {
  return (
    <main className="w-full h-full px-20 py-10">
      <Form clearable={true} inputType="password" />
      <Toast clearable={true} toastAppearenceDuration={5_000} />
    </main>
  );
}
