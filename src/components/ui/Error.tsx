interface ErrorProp {
  children: string;
}

export default function Error({ children }: ErrorProp) {
  return (
    <p className="absolute -bottom-5 left-1 text-red-500 text-xs">{children}</p>
  );
}
