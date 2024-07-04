import Image from "next/image";

const team = [
  {
    name: "Cris Lima",
    job: "Fisioterapeuta",
    description:
      "Fisioterapeuta há 13 anos, formada pela ULBRA. Pós-graduada em Pilates pelo Instituto São Paulo. Instrutora e Empresária na Core Pilates Floripa",
    picture: "/pilates.jpg",
  },
  {
    name: "Daiane Alves Afonso",
    job: "Fisioterapeuta",
    description:
      "Fisioterapeuta há 13 anos, formada pela ULBRA. Pós-graduada em Pilates pelo Instituto São Paulo. Instrutora e Empresária na Core Pilates Floripa",
    picture: "/pilates.jpg",
  },
  {
    name: "Victória Milezzi",
    job: "Fisioterapeuta",
    description:
      "Formada em Fisioterapia pela UDESC. Instrutora de Pilates há 3 anos. Experiência em Pilates solo e aparelhos. ",
    picture: "/pilates.jpg",
  },
];

export default function Team() {
  return (
    <div className="flex flex-col py-10 items-center px-6 lg:px-8 bg-gray-100">
      <h2 className="text-3xl sm:text-4xl py-2 font-bold tracking-tight border-b-2">
        Equipe
      </h2>
      <div className="flex flex-wrap justify-center sm:gap-6">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex flex-col w-72 mt-8 bg-white shadow-lg rounded-xl"
          >
            <Image
              src={member.picture}
              alt=""
              height="200"
              width="600"
              className="rounded-xl p-4"
            />

            <div className="flex flex-col gap-2 justify-center p-4">
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <h4 className="text-lg text-gray-500 font-bold">{member.job}</h4>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
