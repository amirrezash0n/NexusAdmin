import { ClipLoader } from "react-spinners";

interface SpinnerProp {
  className: string;
}

export default function Spinner({ className }: SpinnerProp) {
  return <ClipLoader className={className} />;
}
