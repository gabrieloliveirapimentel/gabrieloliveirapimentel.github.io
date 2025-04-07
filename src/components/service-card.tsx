import type { ReactNode } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className=" rounded-xl border-2 border-[#16181D] p-6 ">
      <div className="flex justify-start mb-4">{service.icon}</div>
      <h3 className="text-lg mb-2 font-['Asap'] font-bold">{service.title}</h3>
      <p className="text-gray-300 text-sm">{service.description}</p>
    </div>
  );
}
