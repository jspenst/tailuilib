import Image from "next/image";
import SocialMedia from "./SocialMedia";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div id="footer">
      <div className="my-24 flex flex-col gap-10 items-center justify-center px-8 text-center">
        <h2 className="text-3xl font-bold">Ainda ficou com alguma dúvida?</h2>
        <Link
          href="https://wa.me/5548992188987?text=Quero%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os!&app_absent=1"
          target="_blank"
          className="rounded-md bg-primary px-3.5 py-2.5 text-2xl font-semibold text-black hover:text-[#F1B145] shadow-2xl hover:bg-black flex items-center gap-4 transition ease duration-300"
        >
          FALE COM A GENTE <FaWhatsapp />
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-8 h-84 bg-primary text-white py-8">
        <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-4xl gap-8 h-84 px-8">
          <div className="w-full sm:w-1/3 flex justify-center items-center">
            <Image
              src="/logo-large.png"
              alt="Logo da Engajame! Design"
              width="200"
              height="200"
            />
          </div>
          <div className="w-full sm:w-1/3 flex justify-center items-center">
            <SocialMedia />
          </div>
        </div>
      </div>
      <div className="bg-primary w-full text-black flex justify-center text-xs font-bold px-8 py-2 text-center">
        &copy; Copyright {currentYear}, ENGAJAME! DESIGN. Todos os direitos
        reservados.
      </div>
    </div>
  );
}
