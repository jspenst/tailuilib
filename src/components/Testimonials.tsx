import Image from "next/image";
import { MdStar } from "react-icons/md";

export default async function Testimonials() {
  const response = await fetch(
    `https://pagesapi.engajamedesign.com.br/api/landing-pages/1?populate=deep`,
    { next: { revalidate: 60 } }
  );
  const data = await response.json();
  const testimonials = await data.data.attributes.section[4].testimonial;

  return (
    <div className="flex flex-col items-center w-full pt-24" id="testimonials">
      <div className="flex flex-col px-6 lg:px-8 max-w-6xl w-full gap-10">
        {/*Title*/}
        <h2 className="text-[#F1B145] w-fit bg-black text-xl sm:text-2xl py-1 px-4 font-bold">
          Depoimentos
        </h2>
        {/*Headline*/}
        <h3 className="w-full text-2xl font-bold">
          O que nossos clientes estão falando:
        </h3>
        {/*Cards*/}
        <div className="flex flex-wrap h-full w-full justify-center items-start overflow-hidden ">
          {testimonials.map((testimonial: any) => (
            <div
              key={testimonial.id}
              className="flex flex-col gap-3 overflow-hidden items-center justify-top w-full max-w-72 min-h-48 m-2 p-6 shadow-xl rounded-xl bg-white"
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
              <p className="flex w-full text-xs">{testimonial.testimonial}</p>
              <div className="flex w-full items-center gap-4">
                {testimonial.src ? (
                  <div className="rounded-full bg-[#EDEDED] h-12 w-12 overflow-hidden">
                    <Image
                      src={testimonial.avatar}
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
