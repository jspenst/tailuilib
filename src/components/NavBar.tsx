"use client";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const navigation = [
  { name: "Sobre nós", href: "#", current: false },
  { name: "Serviços", href: "#", current: true },
  { name: "Portfolio", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Contato", href: "#", current: false },
];

const logo = {
  src: "vercel.svg",
  alt: "Logo",
  height: "h-10",
  span: "Logo",
};

export default function NavBar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMobile = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <header className=" fixed inset-x-0 top-0 z-50 divide-y h-[85px] bg-white">
      {/*Big Screen Navigation Menu*/}
      <nav
        className="flex items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="p-1.5">
            <span className="sr-only">{logo.span}</span>
            <img
              className={"w-auto " + logo.height}
              src={logo.src}
              alt={logo.alt}
            />
          </a>
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
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      {/*Small Screen Navigation Menu*/}
      <>
        {mobileMenu ? (
          <div className="flex flex-col justify-between h-[calc(100vh-80px)] bg-white">
            <div className="flex flex-col justify-center items-center gap-8 pt-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="w-full h-24 flex items-center justify-center gap-8">
              <div className="p-4 bg-gray-300 rounded-xl font-bold">
                Log in &rarr;
              </div>
              <div className="h-3/4 border-l-2 border-gray-300"></div>
              <div className="p-4 bg-primary rounded-xl font-bold text-white">
                Sign up &rarr;
              </div>
            </div>
          </div>
        ) : null}
      </>
      <hr className="mx-4" />
    </header>
  );
}
