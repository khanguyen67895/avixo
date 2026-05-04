import { Zap } from "lucide-react";

type Props = {
  children: React.ReactNode;
  bg?: string;
  border?: string;
  className?: string;
  hasZap?: boolean;
  bordered?: boolean;
};

export default function Tag({ children, bg = "bg-[#8DEE92]", border= "border-[#8DEE92]", className = "", hasZap = true, bordered = false }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-md text-[#014E04] ${bg} ${bordered ? `border ${border}` : ""} ${className}`}
    >
      {hasZap ? <Zap size={11} fill="currentColor" /> : <></>}
      {children}
    </span>
  );
}
