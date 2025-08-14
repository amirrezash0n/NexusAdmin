import { BaseErrorPage } from "../components/common/BaseErrorPage";

export default function NotFoundPage() {
  return (
    <BaseErrorPage
      code={404}
      title="Page Not Found"
      message="The page you're looking for doesn't exist or has been moved."
      animationType="wave"
    />
  );
}
