import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ReactNode, useState } from "react";
import { PiCheckCircle, PiWarningCircle } from "react-icons/pi";

const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  subject: yup
    .string()
    .required("Assunto é obrigatório")
    .min(3, "Assunto deve ter pelo menos 3 caracteres"),
  message: yup
    .string()
    .required("Mensagem é obrigatória")
    .min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type FormData = yup.InferType<typeof schema>;

type FormMessage = {
  message: string;
  showMessage: boolean;
  icon: ReactNode;
};

export function Form() {
  const [message, setMessage] = useState<FormMessage>({
    message: "",
    showMessage: false,
    icon: <></>,
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  function handleReset() {
    reset();
    setTimeout(() => {
      setMessage({
        message: "",
        showMessage: false,
        icon: <></>,
      });
    }, 3000);
  }

  async function handleSubmitForm(data: FormData) {
    try {
      // Utilizando o Nodemailer para enviar o e-mail
      // const response = await axios.post("http://localhost:3003/send", {
      //   email: data.email,
      //   subject: data.subject,
      //   message: data.message,
      // });

      console.log(data);
      const response = {
        data: "Mensagem enviada com sucesso!",
      };

      setMessage({
        message: response.data,
        showMessage: true,
        icon: <PiCheckCircle size={20} className="text-green-500 mr-2" />,
      });
      handleReset();
    } catch {
      setMessage({
        message: "Erro ao enviar mensagem. Tente novamente mais tarde.",
        showMessage: true,
        icon: <PiWarningCircle size={20} className="text-red-500 mr-2" />,
      });

      handleReset();
    }
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <div>
        <div className="mb-1">
          <label htmlFor="email" className="block font-medium mb-2">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="p-2 w-full rounded-md bg-[#292C34] border-2 border-[#292C34] focus:border-blue-500 focus:border-2"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
        </div>
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </div>

      <div>
        <div className="mb-1">
          <label htmlFor="subject" className="block font-medium mb-2">
            Assunto
          </label>
          <input
            type="text"
            id="subject"
            className="p-2 w-full rounded-md bg-[#292C34] border-2 border-[#292C34] focus:border-blue-500 focus:border-2"
            placeholder="Digite o assunto"
            {...register("subject")}
          />
        </div>
        {errors.subject && (
          <span className="mt-1 text-sm text-red-500">
            {errors.subject.message}
          </span>
        )}
      </div>

      <div>
        <div className="mb-2">
          <label htmlFor="message" className="block font-medium mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            rows={4}
            className="p-2 w-full rounded-md bg-[#292C34] border-2 border-[#292C34] focus:border-blue-500 focus:border-2 max-h-60"
            placeholder="Digite sua mensagem"
            {...register("message")}
          />
        </div>
        {errors.message && (
          <span className="text-sm text-red-500">{errors.message.message}</span>
        )}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center font-bold py-1.5 px-4 rounded-[8px] bg-[#292C34]  border-2 border-[#292C34] hover:cursor-pointer hover:border-blue-500 transition-colors duration-300 ease-in-out"
        >
          <span className="text-sm">
            {isSubmitting ? "Enviando..." : "Enviar"}
          </span>
        </button>
      </div>
      {message.showMessage && (
        <div className="flex justify-center items-center">
          {message.icon}
          <span className="text-sm">{message.message}</span>
        </div>
      )}
    </form>
  );
}
