export const base_url =
  "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";

export const transition = "all 1s";

export function generateColors() {
  const blue = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const red = Math.floor(Math.random() * 128);

  return `rgb(${red},${green},${blue})`;
}
