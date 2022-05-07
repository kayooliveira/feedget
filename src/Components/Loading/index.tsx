import React from "react";
import { CircleDashed } from "phosphor-react";
interface LoadingProps {
  customClass?: string;
}

export function Loading({ customClass }: LoadingProps) {
  return (
    <CircleDashed
      weight="bold"
      className={`animate-spin duration-300 ease-linear ${customClass}`}
    />
  );
}
