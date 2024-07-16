import Image from "next/image";

const features = [
  {
    title: "Pilates Clássico",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    picture: "/pilates.jpg",
  },
  {
    title: "Pilates Funcional",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    picture: "/pilates.jpg",
  },
  {
    title: "Massagem de liberação",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    picture: "/massage.jpg",
  },
  {
    title: "Massagem Terapêutica",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    picture: "/massage.jpg",
  },
];

export default function Features() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center px-6 lg:px-8 my-10 max-w-5xl">
        <h2 className="text-3xl sm:text-4xl py-4 mb-4 font-bold tracking-tight border-b-2">
          Serviços
        </h2>
        {/*Big Screen*/}
        <div className="hidden sm:flex sm:flex-col">
          {features.map((feature, index) => (
            <div key={feature.title} className="flex max-w-4xl gap-8 mt-8">
              {index === 0 || index % 2 === 0 ? (
                <Image
                  src={feature.picture}
                  alt=""
                  height="200"
                  width="400"
                  className="rounded-xl"
                />
              ) : null}
              <div className="flex flex-col gap-4 justify-center">
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              {index % 2 !== 0 ? (
                <Image
                  src={feature.picture}
                  alt=""
                  height="200"
                  width="400"
                  className="rounded-xl"
                />
              ) : null}
            </div>
          ))}
        </div>
        {/*Small Screen*/}
        <div className="flex flex-col sm:hidden">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center max-w-xl gap-8 mt-8"
            >
              <div className="flex flex-col gap-4 justify-center">
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <Image
                src={feature.picture}
                alt=""
                height="200"
                width="400"
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
