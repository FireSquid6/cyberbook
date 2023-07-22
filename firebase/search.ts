function search(data: string[], query: string) {
  const queryWords = query.toLowerCase().split(" ");
  const ranked = data.map((item) => {
    const words = item.toLowerCase().split(" ");
    const matches = words.filter((word) => queryWords.includes(word));
    return {
      item,
      matches,
      rank: matches.length,
    };
  });
  ranked.sort((a, b) => b.rank - a.rank);
  return ranked.map((item) => item.item);
}
