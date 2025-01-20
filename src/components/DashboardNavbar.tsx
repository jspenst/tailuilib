"use client"

import Link from "next/link";
import { useState } from "react";
import { FaQuestionCircle, FaShoppingBag, FaUserCircle } from "react-icons/fa";
import { FaChartLine, FaGlobe, FaMoneyBill } from "react-icons/fa6";
import { MdClose, MdHome, MdMenu, MdOutlineQuestionAnswer } from "react-icons/md";

export default function DashboardNavbar () {
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMobile = () => {
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    };
    const [isFinancialOpen, setFinancialOpen] = useState(false)
    const handleFinancialClick = () => {
        isFinancialOpen ? setFinancialOpen(false) : setFinancialOpen(true)
    }
    return (
        <div className="w-full h-[100px] border border-b flex items-center fixed top-0 left-0 px-8 relative z-50">
            <div className="flex items-center justify-center w-full">
                <Link href="/" className="p-1.5">
                    <img src="/logo-small.png" alt="" className="w-auto h-12"/>
                </Link>
                <span className="flex flex-1"></span>
                <div className="flex gap-4 text-3xl">
                    <Link href="">
                        <FaQuestionCircle />
                    </Link>
                    <div>
                        <FaUserCircle />
                    </div>
                    <div className="lg:hidden">
                    <button 
                        type="button" 
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => toggleMobile()}
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenu ? (
                        <MdClose className="text-4xl" aria-hidden="true" />
                        ) : (
                        <MdMenu className="text-4xl" aria-hidden="true" />
                        )}
                    </button>
                    </div>
                </div>
            </div>
            {mobileMenu ? (
            <div
                className="flex flex-col gap-6 items-start absolute top-[100px] left-0 w-screen py-6 px-8 bg-white"
            >
                <Link href="/dashboard" className="flex gap-2 items-start text-lg p-2" onClick={() => toggleMobile()}>
                    <MdHome className="text-3xl"/>
                    Visão Geral
                </Link>
                <div className="flex flex-col items-start text-lg p-2 w-full rounded-lg hover:bg-[#eeeeee]">
                    <div  className="flex gap-2" onClick={handleFinancialClick}>
                        <FaMoneyBill className="text-3xl" />
                        Financeiro
                    </div>
                    {isFinancialOpen &&
                    <div className="flex flex-col gap-2 mt-2 text-sm">
                        <Link href="/dashboard/financial/payable" onClick={() => toggleMobile()}>Valores a pagar</Link>
                        <Link href="/dashboard/financial/receivable" onClick={() => toggleMobile()}>Valores a receber</Link>
                        <Link href="/dashboard/financial/new" onClick={() => toggleMobile()}>Cadastrar novo</Link>
                    </div>
                    }
                </div>
                <Link href="/dashboard/mysite" className="flex gap-2 items-start text-lg p-2" onClick={() => toggleMobile()}>
                    <FaGlobe className="text-3xl" />
                    Meu Site
                </Link>
                <Link href="/dashboard/mysite" className="flex gap-2 items-start text-lg p-2" onClick={() => toggleMobile()}>
                    <FaShoppingBag className="text-3xl" />
                    Minha Loja
                </Link>
                <Link href="/dashboard/mysite" className="flex gap-2 items-start text-lg p-2" onClick={() => toggleMobile()}>
                    <FaChartLine className="text-3xl" />
                    Relatórios
                </Link>
                <Link href="/dashboard/mysite" className="flex gap-2 items-start text-lg p-2" onClick={() => toggleMobile()}>
                    <MdOutlineQuestionAnswer className="text-3xl" />
                    Suporte
                </Link>
            </div>
        ) : null}
        </div>
    )
}