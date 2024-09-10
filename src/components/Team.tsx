import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa6";

const team = [
  {
    name: "Jaime Spenst",
    job: "Programador",
    description: "",
    picture: "/images/jaime.png",
    linkedin: "https://www.linkedin.com/in/jaimespenst/",
    github: "https://github.com/jspenst",
    behance: "",
  },
  {
    name: "Alaís Souza Ferreira Spenst",
    job: "Designer Gráfico",
    description: "",
    picture: "/images/alais.png",
    linkedin: "https://www.linkedin.com/in/alais-souza-ferreira/",
    github: "",
    behance: "https://www.behance.net/engajamedesign",
  },
];

export default function Team() {
  return (
    <div className="flex flex-col items-center w-full" id="team">
      <div className="flex flex-col px-6 lg:px-8 max-w-6xl w-full gap-10">
        <h2 className="text-primary w-fit bg-black text-xl sm:text-2xl py-1 px-4 mb-4 font-bold">
          EQUIPE
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center w-96 mt-8 bg-[#ededed] shadow-2xl border rounded-xl"
            >
              <img
                src={member.picture}
                alt={member.name}
                className="bg-white h-48 w-full object-contain"
              />

              <div className="flex flex-col gap-2 items-center p-4">
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <h4 className="text-lg text-gray-500 font-bold">
                  {member.job}
                </h4>
                {member.description ? <p>{member.description}</p> : null}
                <div className="flex gap-6 text-lg">
                  {member.linkedin ? (
                    <a href={member.linkedin} target="_blank">
                      <FaLinkedin />
                    </a>
                  ) : null}
                  {member.github ? (
                    <a href={member.github} target="_blank">
                      <FaGithub />
                    </a>
                  ) : null}
                  {member.behance ? (
                    <a href={member.behance} target="_blank">
                      <FaBehance />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
