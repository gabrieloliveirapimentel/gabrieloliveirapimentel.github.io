import type { ReactNode } from "react";

interface BadgeProps {
  icon: ReactNode;
  label: string;
}

export function Badge({ icon, label }: BadgeProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#292C34] border-2 border-[#292C34] hover:border-[#878EA1]  text-sm">
      {icon}
      <span className="text-sm font-normal">{label}</span>
    </div>
  );
}
