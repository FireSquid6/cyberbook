export function search(data: Note[], query: string) {
  const queryWords = query.toLowerCase().split(" ");
  const ranked = data.map((note) => {
    const words = note.description.toLowerCase().split(" ");
    const matches = words.filter((word) => queryWords.includes(word));
    return {
      note,
      matches,
      rank: matches.length,
    };
  });
  ranked.sort((a, b) => b.rank - a.rank);
  const top10 = ranked.slice(0, 10).map((item) => item.note);
  return top10;
}

export interface Note {
  index: string;
  description: string;
  date: string;
  page: number;
  id: string;
}
