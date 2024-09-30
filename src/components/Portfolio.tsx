"use client";

import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const portfolio = [
  {
    title: "Identidade Visual Guaranuts",
    description: "",
    picture: "/images/guaranuts.svg",
    link: "https://www.instagram.com/guaranuts/",
  },
  {
    title: "Construção do planner Por uma vida",
    description: "",
    picture: "/images/planner.png",
    link: "https://www.behance.net/gallery/207524185/Planner-Por-Uma-Vida",
  },
  {
    title: "Site da igreja Ramos de Cristo",
    description: "",
    picture: "/images/ramosdecristo.svg",
    link: "https://www.ramosdecristo.com.br/",
  },
  {
    title: "Site da empresa Core Pilates",
    description: "",
    picture: "/images/core-pilates.png",
    link: "https://www.corepilatesfloripa.com.br/",
  },
];

export default function Portfolio() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      className="flex flex-col items-center w-full h-full z-50 pt-24"
      id="portfolio"
    >
      <div className="flex flex-col max-w-6xl gap-10">
        <h2 className="text-[#F1B145] mx-6 lg:mx-8 w-fit bg-black text-xl sm:text-2xl py-1 px-4 mb-4 font-bold tracking-tight border-b-2">
          PORTFOLIO
        </h2>
        <div className="w-screen max-w-6xl px-6 lg:px-8 z-0">
          <Carousel
            responsive={responsive}
            infinite={true}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            {portfolio.map((job) => (
              <div
                key={job.title}
                className="h-60 w-full bg-white border-r border-gray-400 flex items-center justify-center group"
              >
                <div className="absolute top-0 left-0 h-60 w-full bg-transparent hover:bg-black/80 flex flex-col gap-4 z-2 items-center justify-center text-[#F1B145] font-bold transition ease duration-300">
                  <h3 className="hidden group-hover:flex">{job.title}</h3>
                  <Link
                    className="hidden group-hover:flex"
                    href={job.link}
                    target="_blank"
                  >
                    Acessar
                  </Link>
                </div>
                <img src={job.picture} alt="logo" className="h-60" />
              </div>
            ))}
          </Carousel>
        </div>
        ;
      </div>
    </div>
  );
}
