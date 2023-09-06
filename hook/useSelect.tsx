"use client";
import { useState } from "react";

export default function useSelect(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const data = {
    value,
    onChange: (e: React.ChangeEventHandler<HTMLSelectElement>) => {
      setValue(e.target.value as string);
    },
  };
  return [value, data];
}
