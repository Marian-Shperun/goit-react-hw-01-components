function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return { backgroundColor: color };
}
export default getRandomHexColor;
