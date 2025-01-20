"use client"

import Link from "next/link";
import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { FaChartLine, FaGlobe, FaMoneyBill } from "react-icons/fa6";
import { MdHome, MdOutlineQuestionAnswer } from "react-icons/md";

export default function DashboarddSidebar () {
    const [isFinancialOpen, setFinancialOpen] = useState(false)
    const handleFinancialClick = () => {
        isFinancialOpen ? setFinancialOpen(false) : setFinancialOpen(true)
    }
    return (
        <div
                className="hidden lg:flex flex-col gap-8 items-start fixed left-0 w-[300px] h-[calc(100vh-100px)] py-6 px-8 border-r relative"
            >
                <Link href="/dashboard" className="flex gap-2 items-center text-lg p-2 w-full rounded-lg hover:bg-[#eeeeee]">
                    <MdHome className="text-3xl"/>
                    Visão Geral
                </Link>
                <div className="flex flex-col items-start text-lg p-2 w-full rounded-lg hover:bg-[#eeeeee]">
                    <div  className="flex gap-2" onClick={handleFinancialClick}>
                        <FaMoneyBill className="text-3xl" />
                        Financeiro
                    </div>
                    {isFinancialOpen &&
                    <div className="flex flex-col gap-4 mt-2 ml-4 text-sm">
                        <Link href="/dashboard/financial/payable">Valores a pagar</Link>
                        <Link href="/dashboard/financial/receivable">Valores a receber</Link>
                        <Link href="/dashboard/financial/new">Cadastrar novo</Link>
                    </div>
                    }
                </div>
                <Link href="/dashboard/mysite" className="flex gap-2 items-center text-lg p-2 w-full rounded-lg hover:bg-[#eeeeee]">
                    <FaGlobe className="text-3xl" />
                    Meu Site
                </Link>
                <Link href="/dashboard/marketplace" className="flex gap-2 items-center text-lg p-2 w-full rounded-lg hover:bg-[#eeeeee]">
                    <FaShoppingBag className="text-3xl" />
                    Minha Loja
                </Link>
                <Link href="/dashboard/reports" className="flex gap-2 items-center text-lg p-2 w-full rounded-lg hover:bg-[#eeeeee]">
                    <FaChartLine className="text-3xl" />
                    Relatórios
                </Link>
                <Link href="/dashboard/suport" className="flex gap-2 items-center text-lg p-2 w-full rounded-lg hover:bg-[#eeeeee]">
                    <MdOutlineQuestionAnswer className="text-3xl" />
                    Suporte
                </Link>
            </div>
    )
}