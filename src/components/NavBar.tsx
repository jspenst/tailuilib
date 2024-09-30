"use client";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import WhatsappCTA from "./CTA/WhatsappCTA";
import Language from "./Language";
import Link from "next/link";

const navigation = [
  { name: "Serviços", href: "#features", current: false },
  { name: "Portfolio", href: "#portfolio", current: false },
  { name: "Equipe", href: "#team", current: true },
  { name: "Depoimentos", href: "#testimonials", current: false },
  { name: "FAQ", href: "#faq", current: false },
  { name: "Contato", href: "#footer", current: false },
];

const logo = {
  src: "logo-small.png",
  alt: "Logo",
  height: "h-12",
  span: "Logo",
};

export default function NavBar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMobile = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[84px] bg-white">
      {/*Big Screen Navigation Menu*/}
      <nav
        className="flex items-center justify-between px-4 border-b-2 h-full"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="p-1.5">
            <span className="sr-only">{logo.span}</span>
            <img
              className={"w-auto " + logo.height}
              src={logo.src}
              alt={logo.alt}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
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
        <div className="hidden lg:flex">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="h-full hover:bg-secondary hover:text-primary p-6 transition ease duration-300"
            >
              <Link
                href={item.href}
                className="text-sm font-semibold leading-6 text-xl"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Language />
        </div>
      </nav>
      {/*Small Screen Navigation Menu*/}
      <>
        {mobileMenu ? (
          <div
            className="flex flex-col items-center pb-16 justify-between h-[calc(100vh-80px)] bg-white"
            onClick={() => toggleMobile()}
          >
            <div className="flex flex-col justify-center items-center gap-8 pt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <WhatsappCTA />
          </div>
        ) : null}
      </>
    </header>
  );
}
