import { useState } from "react";

export default function useSelect(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const data = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
  };
  return [value, data];
}
