export const autoIncrementKey = (items: any[]): number => {
  if(items.length === 0) return 1;
  console.log(...items.keys());
  return Math.max(...items.keys()) + 1;
}