export function search(
  data: Note[],
  query: string,
  dateStart?: string,
  dateEnd?: string,
  index?: string,
  pageStart?: number,
  pageEnd?: number
) {
  const queryWords = query.toLowerCase().split(" ");
  const filtered = data.filter((note) => {
    if (dateStart && note.date < dateStart) {
      return false;
    }
    if (dateEnd && note.date > dateEnd) {
      return false;
    }
    if (index && note.index !== index) {
      return false;
    }
    if (pageStart && note.page < pageStart) {
      return false;
    }
    if (pageEnd && note.page > pageEnd) {
      return false;
    }
    return true;
  });
  const ranked = filtered.map((note) => {
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
