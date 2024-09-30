import { FaCheck } from "react-icons/fa6";
import QualifiedCTA from "../CTA/QualifiedCTA";

export default function HeroSection2() {
  return (
    <div className="relative isolate h-full">
      {/*Conteudo*/}
      <div className="w-full h-full flex flex-col items-center mx-auto pt-24 lg:pt-36 pb-16 px-6 lg:px-8">
        <div className="max-w-5xl w-full flex flex-col lg:flex-row">
          <div className="flex flex-col items-center lg:items-start justify-center gap-8 lg:gap-16 lg:w-2/3 pr-16">
            <h1 className="text-3xl lg:text-4xl font-bold text-black w-full">
              ESTÁ PERDENDO{" "}
              <span className="px-1 animate-pulse underline">VISIBILIDADE</span>
              <br />E <span className="underline">VENDAS</span> NO DIGITAL?
            </h1>
            <div className="max-w-xl text-justify text-sm lg:text-md">
              Na Engajame! Design, ajudamos você a se destacar online com design
              criativo, sites de alta performance, campanhas de tráfego
              eficiente e automação que transforma visitantes em clientes. Vamos
              impulsionar o crescimento da sua marca no digital.
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-md lg:text-xl flex gap-2 items-center">
                <FaCheck />
                <div>Design Gráfico Que Impacta</div>
              </div>
              <div className="text-md lg:text-xl flex gap-2 items-center">
                <FaCheck />
                <div>Sites Que Convertem</div>
              </div>
              <div className="text-md lg:text-xl flex gap-2 items-center">
                <FaCheck />
                <div>Tráfego Pago Direcionado</div>
              </div>
              <div className="text-md lg:text-xl flex gap-2 items-center">
                <FaCheck />
                <div>Automação de Vendas</div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center lg:w-1/3">
            <div className="relative mt-12 lg:mt-24 flex flex-col gap-8 items-center justify-center max-w-lg bg-secondary shadow-xl p-10 rounded-xl">
              <h4 className="font-bold text-xl">Entre em contato conosco!</h4>
              <QualifiedCTA />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
