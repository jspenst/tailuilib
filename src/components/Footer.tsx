import Image from "next/image";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-8 h-84 bg-white border-t-2 border-gray-400">
      <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-4xl gap-8 h-84 px-8">
        <div className="w-full sm:w-1/3 flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="Logo da Core Pilates"
            width="200"
            height="200"
          />
        </div>
        <div className="w-full max-w-sm sm:w-1/3 flex flex-col gap-2">
          <div>
            <h3 className="font-bold">Contato</h3>
            <p>(48) 9 9999-9999</p>
          </div>
          <div>
            <h3 className="font-bold">Endereço</h3>
            <p>
              Rua João Gualberto Soares n° 117, sala 04 - Ingleses -
              Florianópolis - SC
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center items-center">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
