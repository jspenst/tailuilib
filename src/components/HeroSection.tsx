import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="relative isolate h-full">
      {/*Conteudo*/}
      <div className="w-full h-full flex flex-col items-center mx-auto pt-28 lg:pt-36 px-6 lg:px-8">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-black sm:text-5xl ">
            Transforme seu Negócio com Criatividade, Excelência e Propósito
          </h1>
          <p className="mt-12 lg:mt-24 text-lg text-black">
            Nosso objetivo é impulsionar o crescimento do seu negócio, engajando
            e atraindo clientes com websites de alto desempenho, design
            estratégico, tráfego pago direcionado e automação de vendas.
            Oferecemos soluções completas para elevar sua marca e aumentar suas
            vendas no ambiente digital.
          </p>
          <div className="mt-12 lg:mt-24 flex flex-col items-center justify-center">
            <Link
              href="https://wa.me/5548992188987?text=Quero%20solicitar%20um%20or%C3%A7amento!&app_absent=1"
              target="_blank"
              className="rounded-md bg-primary px-3.5 py-2.5 text-xl font-semibold text-black hover:text-[#F1B145] shadow-sm hover:bg-black flex items-center gap-4 transition ease duration-300"
            >
              QUERO FAZER UM ORÇAMENTO <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
