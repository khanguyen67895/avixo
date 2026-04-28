import { Zap } from "lucide-react";

type Props = {
  children: React.ReactNode;
  bg?: string;
  className?: string;
};

export default function Tag({ children, bg = "bg-[#8DEE92]", className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full text-[#1D1D1D] ${bg} ${className}`}
    >
      <Zap size={11} fill="currentColor" />
      {children}
    </span>
  );
}
