import Image from "next/image";

const features = [
  {
    title: "Pilates com aparelhos",
    description:
      "Nessa modalidade de exercícios são utilizados aparelhos de madeira e metal desenvolvidos por Joseph Pilates, que foram aperfeiçoados com o tempo. São eles barrel, chair, cadilac e reformer.⠀Eles utilizam molas, alças e barras que podem facilitar ou dificultar os movimentos, permitindo que alunos de todas as idades e condições físicas se beneficiem do Pilates, de acordo com sua capacidade, grau de dificuldade e condicionamento.⠀",
    picture: "/aparelhos.jpg",
  },
  {
    title: "Pilates funcional",
    description:
      "Uma das principais características dessa variação é a combinação de exercícios ritmados e frequentes que tem como objetivo aumentar consideravelmente a frequência cardíaca do praticante, sendo considerada um treino aeróbico bastante eficiente. O tipo funcional também faz uso da agilidade do praticante para que ele execute os exercícios de forma cada vez mais rápida, sem perder o equilíbrio e a postura correta durante a prática. ",
    picture: "/pilates.jpg",
  },
  {
    title: "Massagem terapêutica",
    description:
      "Indicada para dores musculares, lesões, tensões crônicas, problemas de mobilidade e cefaléia tensional. É aplicada pressão moderada aa intensa e usada a técnica auxiliar de liberação miofascial e ventosaterapia",
    picture: "/massage.jpg",
  },
  {
    title: "Massagem relaxante",
    description:
      "Com propriedades relaxantes e calmantes, libera a tensão muscular e ativa a circulação sanguínea. Aplicação de pressão suave a moderada",
    picture: "/terapeutica.jpg",
  },
  {
    title: "Liberação miofascial com ventosaterapia",
    description:
      "As ventosas agem sobre os pontos gatilhos da dor. Essa técnica consta na sucção desses pontos de dor, fazendo com que aumente o fluxo sanguíneo e melhore a área de dor, através de uma vascularização no local. O resultado disso é uma maior oxigenação destes tecidos, que permite a liberação de toxinas do sangue e do músculo com maior agilidade.",
    picture: "/ventosaterapia.jpg",
  },
];

export default function Features() {
  return (
    <div className="flex flex-col items-center w-full bg-white" id="features">
      <div className="flex flex-col items-center px-6 lg:px-8 my-10 max-w-5xl">
        <h2 className="text-3xl sm:text-4xl py-4 mb-4 font-bold tracking-tight border-b-2">
          Serviços
        </h2>
        {/*Big Screen*/}
        <div className="hidden sm:flex sm:flex-col">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex max-w-4xl gap-8 mt-8 items-center"
            >
              {index === 0 || index % 2 === 0 ? (
                <Image
                  src={feature.picture}
                  alt=""
                  height="250"
                  width="500"
                  className="rounded-xl h-[250px] w-[500px]"
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
