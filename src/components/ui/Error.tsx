interface ErrorProp {
  children: string;
}

export default function Error({ children }: ErrorProp) {
  return <p className="text-red-500 text-xs">{children}</p>;
}
