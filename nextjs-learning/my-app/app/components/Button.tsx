"use client";

type ButtonProps = {
  label: string;
  onClick: (value: string) => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  const handleClick = () => {
    onClick(`Button ${label} was clicked!`);
  };

  return <button onClick={handleClick}>{label}</button>;
}
