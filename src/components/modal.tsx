import { Form } from "./form";
import { PiXBold } from "react-icons/pi";

interface ModalProps {
  closeButton: (prev: boolean) => void;
}

export function Modal({ closeButton }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative bg-[#16181D] p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="text-2xl font-['Asap'] font-bold ">
            Entre em contato
          </h2>
          <button
            className=" hover:text-blue-400 cursor-pointer"
            onClick={(prev) => {
              closeButton(!prev);
            }}
          >
            <PiXBold size={16} />
          </button>
        </div>
        <Form />
      </div>
    </div>
  );
}
