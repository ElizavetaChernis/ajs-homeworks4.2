
export default function sortHealth(arr) {
  if (arr === undefined || null) {
    throw new Error('Ошибка');
  }
  return arr.sort((a, b) => b.health - a.health);
}