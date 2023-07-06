export interface ButtonProps {
  text: string;
  onClick: () => void;
  classExtend?: string;
}

export default function PyroButton({
  text,
  onClick,
  classExtend = "",
}: ButtonProps) {
  return (
    <button
      className={`bg-primary-500 p-4 rounded-full m-4 text-2xl shadow-xl hover:bg-primary-400 transition-colors hover:animate-expand ${classExtend}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
