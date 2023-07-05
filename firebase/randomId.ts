export default function randomId(): string {
  return Date.now().toString() + getRandomInt(1000000, 9999999).toString();
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
