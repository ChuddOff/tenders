interface Props extends React.HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
}

export default function Spinner({ className, width, height, ...props }: Props) {
  return (
    <div
      style={{
        width: width ? `${width}px` : "15px",
        height: height ? `${height}px` : "15px",
      }}
      className={`${className} border-[#888888]`}
      {...props}
    >
      <div
        className={`h-full w-full animate-spin rounded-full border-2 border-inherit border-t-transparent bg-transparent`}
      />
    </div>
  );
}
