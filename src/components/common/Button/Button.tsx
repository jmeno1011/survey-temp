import React, { FormEvent } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  disabled?: boolean;
  text: string;
  onClick: (e: FormEvent) => void;
}

export default function Button({ disabled, text, onClick }: ButtonProps) {
  return (
    <div className={styles.btnCenter}>
      <button disabled={disabled} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
