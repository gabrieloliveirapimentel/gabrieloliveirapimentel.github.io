import { FaCode } from "react-icons/fa6";

export function Icon() {
  return (
    <div className="w-48 h-48 rounded-full border-4 border-rose-500 relative mx-auto mb-12">
      <img
        src="https://avatars.githubusercontent.com/u/63811493?v=4"
        alt="Gabriel Oliveira Pimentel"
        className="w-full h-full object-cover rounded-full border-5 border-[#16181D]"
      />
      <div className="absolute bottom-1 right-1 bg-[#16181D] p-1 rounded-full text-xs z-50  ">
        <FaCode className="text-lime-500" size={30} />
      </div>
    </div>
  );
}
