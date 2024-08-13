import { MdWhatsapp } from "react-icons/md";

export default function WhatsappCTA() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5548991537664&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+aula+experimental%21&type=phone_number&app_absent=1"
      target="_blank"
      className="flex gap-2 items-center text-sm leading-6 text-white p-4 bg-primary rounded-xl font-bold w-fit"
    >
      Entre em contato
      <MdWhatsapp className="text-xl" />
    </a>
  );
}
