import { BaseErrorPage } from "../components/common/BaseErrorPage";

export default function ErrorPage() {
  return (
    <BaseErrorPage
      code={500}
      title="Something went wrong"
      message="An unexpected error occurred. Please try again later."
      animationType="bounce"
    />
  );
}
