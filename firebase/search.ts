export default function textSearch(items: string[], query: string) {
  return items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
}
