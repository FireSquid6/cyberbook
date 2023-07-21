interface NoteProps {
  description: string;
  date: string;
  page: string;
}
export default function Note({ description, date, page }: NoteProps) {
  return (
    <div className="flex flex-row">
      <p>{description}</p>
      <p>{date}</p>
      <p>{page}</p>
    </div>
  );
}
