import { KeyboardEvent } from "react";

export const numberOnly = (e: KeyboardEvent<HTMLInputElement>) => {
  if (!/[0-9]/.test(e.key)) {
    e.preventDefault();
  } else {
    return e;
  }
}