import Link from "next/link";
import { FaHome, FaRegMoneyBillAlt, FaStoreAlt } from "react-icons/fa";
import { FaChartLine, FaGlobe, FaRegMessage } from "react-icons/fa6";

export default function DashboardLeftbar() {
  return (
    <div className="hidden md:flex h-full w-64 bg-white fixed top-28 left-0 border border-b border-[#ededed]">
      <div className="flex flex-col gap-4 mx-4 my-4 text-[#555555]">
        <Link
          href="#"
          className="flex items-center gap-4 hover:bg-[#eeeeee] p-2 rounded-lg  "
        >
          <FaHome className="text-2xl" />
          <h3>Visão Geral</h3>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-4 hover:bg-[#eeeeee] p-2 rounded-lg  "
        >
          <FaRegMoneyBillAlt className="text-2xl" />
          <h3>Financeiro</h3>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-4 hover:bg-[#eeeeee] p-2 rounded-lg  "
        >
          <FaGlobe className="text-2xl" />
          <h3>Meu Site</h3>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-4 hover:bg-[#eeeeee] p-2 rounded-lg  "
        >
          <FaStoreAlt className="text-2xl" />
          <h3>Minha Loja</h3>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-4 hover:bg-[#eeeeee] p-2 rounded-lg  "
        >
          <FaChartLine className="text-2xl" />
          <h3>Relatórios</h3>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-4 hover:bg-[#eeeeee] p-2 rounded-lg  "
        >
          <FaRegMessage className="text-2xl" />
          <h3>Suporte</h3>
        </Link>
      </div>
    </div>
  );
}
