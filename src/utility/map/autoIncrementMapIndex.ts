export const autoIncrementMapIndex = (items: Map<number, any>): number => {
  let newId: number = 0;
  items.forEach((id: number, item: any): void => { 
    if (item.id !== undefined && id < item.id) newId = ++id;
  });
  return (newId === 0) ?  ++newId : newId;
}