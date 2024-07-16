import { MdWhatsapp } from "react-icons/md";

export default function WhatsappCTA() {
  return (
    <a
      href="#"
      className="flex gap-2 items-center text-sm leading-6 text-white p-4 bg-primary rounded-xl font-bold w-fit"
    >
      Entre em contato
      <MdWhatsapp className="text-xl" />
    </a>
  );
}
