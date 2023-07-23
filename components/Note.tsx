import { FaTrash } from "react-icons/fa";

interface NoteProps {
  description: string;
  date: string;
  page: string;
  index: string;
  onDelete?: (id: string) => void;
  id?: string;
}
export default function Note({
  description,
  date,
  page,
  index,
  onDelete = () => {},
  id = "",
}: NoteProps) {
  return (
    <div className="flex flex-row justify-between p-2 bg-base-100 my-2 shadowl-lg border-white border rounded-lg transition-all">
      <span className="text-gray-300">{description}</span>
      <div className="text-gray-400">
        <span className="mr-6">{date}</span>
        <span className="mr-6">
          nb. {index} | p.{page}
        </span>
        <button className="hover:text-error transition-all">
          <FaTrash onClick={() => onDelete(id)} />
        </button>
      </div>
    </div>
  );
}
