export default interface TodoItemInterface {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  key?: string
}