import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

export default function HeroSection2() {
  return (
    <div className="relative isolate h-full">
      {/*Conteudo*/}
      <div className="w-full h-full hidden lg:flex flex-col items-center mx-auto pt-48 px-6 lg:px-8">
        <div className="max-w-5xl w-full flex">
          <div className="flex flex-col items-start justify-center gap-8 w-2/3 pr-16">
            <h1 className="text-4xl font-bold text-black w-full">
              VOCÊ PERDENDO VISIBILIDADE
              <br />E VENDAS NO DIGITAL?
            </h1>
            <div className="text-justify">
              Na Engajame! Design, ajudamos você a se destacar online com design
              criativo, sites de alta performance, campanhas de tráfego
              eficiente e automação que transforma visitantes em clientes. Vamos
              impulsionar o crescimento da sua marca no digital.
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-xl flex gap-2 items-center">
                <FaCheck />
                <div>Design Gráfico Que Impacta</div>
              </div>
              <div className="text-xl flex gap-2 items-center">
                <FaCheck />
                <div>Sites Que Convertem</div>
              </div>
              <div className="text-xl flex gap-2 items-center">
                <FaCheck />
                <div>Tráfego Pago Direcionado</div>
              </div>
              <div className="text-xl flex gap-2 items-center">
                <FaCheck />
                <div>Automação de Vendas</div>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-24 flex flex-col gap-8 items-center justify-center w-1/3 bg-secondary shadow-xl p-10 rounded-xl">
            <h4 className="font-bold text-xl">
              Entre em contato com um clique!
            </h4>
            {/*<div className="flex flex-col gap-2 w-full">
              <label htmlFor="e-mail">Seu melhor e-mail:</label>
              <input
                className="border border-black rouded-md w-full px-2"
                id="e-mail"
                type="email"
                placeholder="seuemail@gmail.com"
              ></input>
            </div>*/}
            <Link
              href="https://wa.me/5548992188987?text=Quero%20solicitar%20um%20or%C3%A7amento!&app_absent=1"
              target="_blank"
              className="rounded-md bg-primary px-3.5 py-2.5 text-md font-semibold text-black hover:text-[#F1B145] shadow-sm hover:bg-black flex items-center gap-4 transition ease duration-300"
            >
              VAMOS CONVERSAR <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
