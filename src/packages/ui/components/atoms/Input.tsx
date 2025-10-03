import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`p-2 flex-1 rounded bg-gray-300 ${props.className || ""}`}
    />
  );
}
