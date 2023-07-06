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
      className={`bg-primary-500 p-4 rounded-full m-2 text-2xl shadow-xl ${classExtend}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
