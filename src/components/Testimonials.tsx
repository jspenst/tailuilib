import Image from "next/image";
import { MdStar } from "react-icons/md";

const testimonials = [
  {
    name: "Alaís",
    job: "",
    text: "Muito boa... a fisioterapeuta Crislaine é muito atenciosa e uma excelente profissional!! Já em pouco tempo, estou vendo muito resultado!! Obrigada.",
    src: "",
    stars: 5,
  },
  {
    name: "Lya Mello",
    job: "",
    text: "Está sendo ótima, minha prof. Daiana é maravilhosa! Estou me sentindo ótima e ela cuida com muito amor de seus alunos! Parabéns Cris e Daia pelo profissionalismo. Super indico🌻.",
    src: "",
    stars: 5,
  },
  {
    name: "Eduarda Fetter",
    job: "",
    text: "Excelente profissional, ambiente bem equipado e tranquilo. Além de ótimos resultados. Minha prof nota 1 milhão amo demais, melhor profissional de Florianópolis!",
    src: "",
    stars: 5,
  },
  {
    name: "Simone Rosa",
    job: "",
    text: "A Cris é maravilhosa! Grande profissional!",
    src: "",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <div
      className="flex flex-col items-center w-full bg-white"
      id="testimonials"
    >
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
              className="flex flex-col gap-3 overflow-hidden items-center justify-center w-full max-w-72 m-2 p-6 shadow-xl rounded-xl bg-white"
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
                {testimonial.src ? (
                  <div className="rounded-full bg-[#EDEDED] h-12 w-12 overflow-hidden">
                    <Image
                      src={testimonial.src}
                      alt="Client foto"
                      height={200}
                      width={200}
                    />
                  </div>
                ) : null}
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
