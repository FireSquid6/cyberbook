export function toFullUrl(path: string) {
  if (process.env.NODE_ENV === "production") {
    return "https://notebook.firesquid.co/" + path;
  }
  return "http://localhost:3000/" + path;
}
