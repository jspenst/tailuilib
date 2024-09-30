"use client";
import { useState } from "react";

const faqs = [
  {
    id: "1",
    question:
      "Por que investir em design gráfico profissional é importante para o meu negócio?",
    answer:
      "O design gráfico profissional fortalece a identidade da sua marca, transmite credibilidade e diferencia você da concorrência. Com um design bem elaborado, você atrai mais clientes e deixa uma impressão duradoura.",
  },
  {
    id: "2",
    question: "Como a criação de um site pode impactar minhas vendas?",
    answer:
      "Um site bem projetado é essencial para estabelecer uma presença online sólida. Ele funciona como sua vitrine digital, atraindo visitantes e convertendo-os em clientes com navegação intuitiva, visual atraente e conteúdo relevante.",
  },
  {
    id: "3",
    question:
      "Qual a diferença entre tráfego pago e orgânico, e por que devo investir em tráfego pago?",
    answer:
      "Tráfego pago é rápido e direcionado, alcançando seu público-alvo instantaneamente por meio de anúncios. Ao contrário do tráfego orgânico, que leva tempo para crescer, o tráfego pago aumenta rapidamente a visibilidade da sua marca, gerando resultados imediatos.",
  },
  {
    id: "4",
    question: "Como a automação de vendas pode ajudar o meu negócio?",
    answer:
      "Automatizar processos de vendas economiza tempo, reduz erros e melhora a experiência do cliente. Desde capturar leads até o acompanhamento pós-venda, a automação garante que você aproveite cada oportunidade de conversão sem esforço manual.",
  },
  {
    id: "5",
    question:
      "Como funciona o processo de desenvolvimento de um site com a Engajame! Design?",
    answer:
      "Começamos com uma análise detalhada das suas necessidades e objetivos. Em seguida, desenvolvemos um design personalizado e funcional, alinhado com sua marca. Mantemos você informado em todas as etapas até a entrega do site, pronto para converter visitantes em clientes.",
  },
  {
    id: "6",
    question:
      "Quais resultados posso esperar ao contratar a gestão de tráfego pago da Engajame! Design?",
    answer:
      "Você pode esperar um aumento imediato na visibilidade online, mais acessos ao seu site e, principalmente, um crescimento significativo nas conversões. Nossas campanhas são otimizadas para maximizar seu retorno sobre o investimento.",
  },
  {
    id: "7",
    question: "A automação de vendas é complicada de implementar?",
    answer:
      "Não! Nós cuidamos de todo o processo de configuração e implementação, garantindo que as automações funcionem de forma simples e integrada ao seu negócio. Tudo é pensado para facilitar sua rotina e aumentar suas vendas.",
  },
];

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item w-full max-w-6xl pb-2">
      <div
        className="faq-question flex justify-between max-w-6xl border-b-2 border-gray-300"
        onClick={toggleFaq}
      >
        <span className="font-bold">{question}</span>
        <span className="text-3xl text-gray-600">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="faq-answer p-2">{answer}</div>}
    </div>
  );
};

export default function FAQ() {
  return (
    <div className="flex flex-col items-center w-full pt-24" id="faq">
      <div className="flex flex-col px-6 lg:px-8 max-w-6xl w-full gap-10">
        <h2 className="text-[#F1B145] w-fit bg-black text-xl sm:text-2xl py-1 px-4 font-bold">
          Perguntas Frequentes
        </h2>
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
