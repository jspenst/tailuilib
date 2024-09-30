import { CgWebsite } from "react-icons/cg";
import { FaMeta } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";
import { SiGoogleads } from "react-icons/si";

export default function Features() {
  return (
    <div
      className="flex flex-col items-center w-full h-full z-50 pt-24"
      id="features"
    >
      <div className="flex flex-col px-6 lg:px-8 max-w-6xl w-full gap-10">
        <h2 className="text-[#F1B145] w-fit bg-black text-xl sm:text-2xl py-1 px-4 mb-4 font-bold">
          NOSSOS SERVIÇOS
        </h2>
        <div className="flex gap-6 flex-wrap items-center justify-center">
          <div className="flex flex-col items-center gap-4 w-56 h-56 bg-[#ededed] hover:bg-black hover:text-[#f1b145] rounded-xl p-4 shadow-xl transition ease  duration-300">
            <MdDesignServices className="text-4xl" />
            <h2 className="flex gap-4 items-center w-fit font-bold">DESIGN</h2>
            <p className="text-center text-sm">
              Destaque sua marca com design gráfico que atrai e comunica.
              Criamos identidades visuais e materiais que conectam.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 w-56 h-56 bg-[#ededed] hover:bg-black hover:text-[#f1b145] rounded-xl p-4 shadow-xl transition ease  duration-300">
            <CgWebsite className="text-4xl" />
            <h2 className="flex gap-4 items-center w-fit font-bold">WEBSITE</h2>
            <p className="text-center text-sm">
              Sites que impressionam e convertem. Criamos websites rápidos,
              funcionais e alinhados com a sua marca.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 w-56 h-56 bg-[#ededed] hover:bg-black hover:text-[#f1b145] rounded-xl p-4 shadow-xl transition ease  duration-300">
            <div className="flex gap-4">
              <SiGoogleads className="text-4xl" />
              <FaMeta className="text-4xl" />
            </div>
            <h2 className="flex gap-4 items-center w-fit font-bold">
              TRÁFEGO PAGO
            </h2>
            <p className="text-center text-sm">
              Atraia os clientes certos com campanhas de tráfego pago otimizadas
              para maximizar seus resultados.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 w-56 h-56 bg-[#ededed] hover:bg-black hover:text-[#f1b145] rounded-xl p-4 shadow-xl transition ease  duration-300">
            <RiRobot2Line className="text-4xl" />
            <h2 className="flex gap-4 items-center w-fit font-bold">
              AUTOMAÇÕES
            </h2>
            <p className="text-center text-sm">
              Automatize suas vendas e foque no crescimento. Simplifique
              processos e aumente suas conversões.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
