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
      className={`bg-primary-500 p-4 rounded-[25px] m-4 text-2xl shadow-xl hover:bg-primary-400 transition-all hover:rounded-sm hover:scale-110 ${classExtend}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
