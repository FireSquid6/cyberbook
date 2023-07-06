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
    <button className={` ${classExtend}`} onClick={onClick}>
      {text}
    </button>
  );
}
