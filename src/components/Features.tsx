import Image from "next/image";
import Markdown from "react-markdown";

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
      "A massagem é a arte milenar de cura que proporciona alívio, relaxamento e bem-estar. Além de aliviar as tensões e dores musculares, promove a circulação sanguínea e reduz o estresse , equilibrando corpo e mente. A massagem terapêutica é profunda e indicada para dores crônicas com aplicação de ventosaterapia.",
    picture: "/terapeutica.jpg",
  },
  {
    title: "Liberação miofascial com ventosaterapia",
    description:
      "As ventosas agem sobre os pontos gatilhos da dor. Essa técnica consta na sucção desses pontos de dor, fazendo com que aumente o fluxo sanguíneo e melhore a área de dor, através de uma vascularização no local. O resultado disso é uma maior oxigenação destes tecidos, que permite a liberação de toxinas do sangue e do músculo com maior agilidade.",
    picture: "/ventosaterapia.jpg",
  },
  {
    title: "Outras Massagens:",
    description: `**Massagem relaxante:** Promove o alívio das tensões do dia a dia, relaxamento profundo e bem-estar.  
      **Drenagem Linfática:** Técnica que estimula o sistema linfático, ajudando a eliminar toxinas e reduzir inchaços.  
      **Massagem modeladora:** Técnica vigorosa que atua diretamente nas áreas com acúmulo de gordura ajudando a remodelar o corpo.  
      **Esfoliação corporal/facial:** Técnica que remove as células mortas da pele promovendo a renovação celular.  
      **SPA dos pés:** Tratamento relaxante que inclui escalda pés, esfoliação, hidratação e massagem, deixando os pés renovados e revitalizados.  
      **Massagem facial:** Técnica que utiliza movimentos suaves e precisos para estimular a circulação, melhorar o tônus muscular e promover uma pele mais saudável e rejuvenescida.`,
    picture: "/massage.jpg",
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
                <Markdown>{feature.description}</Markdown>
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
                <Markdown>{feature.description}</Markdown>
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
