import { useState } from "react";

// write your custom hook here to control your checkout form
export const useForm = (initialValue) => {
  // Settings state to initialValue passed
  const [value, setValue] = useState(initialValue);

  // Creatinig function to handle changes
  const handleChanges = (updatedValue) => {
    setValue(updatedValue);
  };
  // Returning all 3 in a array
  return [value, setValue, handleChanges];
};
