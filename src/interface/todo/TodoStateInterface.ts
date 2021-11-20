import { TodoItemInterface } from "@interface";

export default interface TodoStateInterface {
  value: {
    [key: string]: TodoItemInterface;
  };
}