import Image from "next/image";

export default function WhatsappFixedCTA() {
  return (
    <div className="flex lg:hidden fixed bottom-0 right-0 justify-end z-100">
      <a
        href="https://api.whatsapp.com/send/?phone=5548991537664&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+aula+experimental%21&type=phone_number&app_absent=1"
        target="_blank"
        className="w-full h-full rounded-full z-100"
      >
        <Image
          src="/whatsapp.png"
          height="150"
          width="150"
          alt="Whatsapp Button"
        />
      </a>
    </div>
  );
}
