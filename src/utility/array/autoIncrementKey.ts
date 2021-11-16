export const autoIncrementKey = (items: any[]): number => {
  if(items.length === 0) return 1;
  return Math.max(...items.keys()) + 1;
}