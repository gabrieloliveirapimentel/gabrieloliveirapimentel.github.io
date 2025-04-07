import { PiArrowUpRightBold, PiEnvelope } from "react-icons/pi";

interface SocialButtonProps {
  handleStateModal: () => void;
}

export function SocialButton({ handleStateModal }: SocialButtonProps) {
  return (
    <button className="flex items-center justify-between bg-[#292C34] p-4 rounded-lg border-[#292C34] border-2 hover:border-blue-400 w-full hover:text-blue-400">
      <div className="flex items-center gap-3">
        <PiEnvelope className="text-xl " />
        <span>E-mail</span>
      </div>
      <button onClick={handleStateModal} className="cursor-pointer">
        <PiArrowUpRightBold className="text-xl" />
      </button>
    </button>
  );
}
