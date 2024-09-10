import { MdWhatsapp } from "react-icons/md";

export default function WhatsappCTA() {
  return (
    <a
      href="https://wa.me/5548992188987?text=Quero%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os!&app_absent=1"
      target="_blank"
      className="flex gap-2 items-center text-lg leading-6 text-white p-4 bg-primary rounded-xl font-bold w-fit"
    >
      ENTRE EM CONTATO
      <MdWhatsapp className="text-xl" />
    </a>
  );
}
