import Image from "next/image";
import { MdStar } from "react-icons/md";

const testimonials = [
  {
    name: "Fulano",
    job: "Empreendedor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum et nisl et urna tincidunt vulputate non dignissim enim.",
    src: "/victoria.png",
    stars: 3,
  },
  {
    name: "Fulano",
    job: "Empreendedor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum et nisl et urna tincidunt vulputate non dignissim enim.",
    src: "/victoria.png",
    stars: 5,
  },
  {
    name: "Fulano",
    job: "Empreendedor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum et nisl et urna tincidunt vulputate non dignissim enim.",
    src: "/victoria.png",
    stars: 4,
  },
  {
    name: "Fulano",
    job: "Empreendedor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum et nisl et urna tincidunt vulputate non dignissim enim.",
    src: "/victoria.png",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col py-10 items-center justify-center px-6 lg:px-8 max-w-5xl">
        {/*Title*/}
        <h2 className="text-3xl sm:text-4xl py-2 font-bold tracking-tight border-b-2">
          Depoimentos
        </h2>
        {/*Headline*/}
        <h3 className="w-full text-2xl font-bold mt-5">
          O que nossos clientes estão falando:
        </h3>
        {/*Cards*/}
        <div className="flex flex-wrap h-full w-full justify-center items-start overflow-hidden mt-5">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col gap-3 overflow-hidden items-center justify-center w-full max-w-72 m-2 p-6 shadow-xl rounded-xl"
            >
              <div className="flex w-full">
                <MdStar
                  className={
                    testimonial.stars >= 1
                      ? "text-yellow-400"
                      : "text-[#cccccc]"
                  }
                />
                <MdStar
                  className={
                    testimonial.stars >= 2
                      ? "text-yellow-400"
                      : "text-[#cccccc]"
                  }
                />
                <MdStar
                  className={
                    testimonial.stars >= 3
                      ? "text-yellow-400"
                      : "text-[#cccccc]"
                  }
                />
                <MdStar
                  className={
                    testimonial.stars >= 4
                      ? "text-yellow-400"
                      : "text-[#cccccc]"
                  }
                />
                <MdStar
                  className={
                    testimonial.stars >= 5
                      ? "text-yellow-400"
                      : "text-[#cccccc]"
                  }
                />
              </div>
              <p className="flex w-full text-xs">{testimonial.text}</p>
              <div className="flex w-full items-center gap-4">
                <div className="rounded-full bg-[#EDEDED] h-12 w-12 overflow-hidden">
                  <Image
                    src={testimonial.src}
                    alt="Client foto"
                    height={200}
                    width={200}
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1">{testimonial.name}</h3>
                  <p className="text-xs text-[#636262] mb-1">
                    {testimonial.job}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
