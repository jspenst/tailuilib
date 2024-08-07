"use client";
import { useState } from "react";

const faqs = [
  {
    id: "1",
    question: "O que é o Pilates?",
    answer:
      "O Pilates é um sistema de exercícios desenvolvido por Joseph Pilates no início do século 20. Ele se concentra no fortalecimento dos músculos centrais, melhorando a postura e a flexibilidade, e promovendo a consciência corporal.",
  },
  {
    id: "2",
    question: "Pilates não é muito caro?",
    answer:
      "Entendemos que o custo pode ser uma preocupação, mas considere Pilates como um investimento em sua saúde e bem-estar. Além disso, oferecemos pacotes e planos de pagamento flexíveis para se adequarem ao seu orçamento. Venha fazer uma aula experimental gratuita e veja o valor que o Pilates pode agregar à sua vida.",
  },
  {
    id: "3",
    question:
      "E se eu não for flexível ou forte o suficiente para fazer Pilates?",
    answer:
      "Pilates é para todos, independentemente do seu nível de flexibilidade ou força. Nossos instrutores experientes estão aqui para adaptar os exercícios às suas necessidades e habilidades, ajudando você a melhorar gradualmente. Cada pessoa tem um ponto de partida, e estamos aqui para apoiar seu progresso.",
  },
  {
    id: "4",
    question:
      "Tenho uma lesão ou condição de saúde. Ainda posso fazer Pilates?",
    answer:
      "Pilates é uma prática de baixo impacto, ideal para pessoas com lesões ou condições de saúde. Nossos instrutores são qualificados para trabalhar com uma variedade de necessidades e limitações físicas, criando um programa personalizado que respeita suas condições e promove a recuperação e fortalecimento.",
  },
  {
    id: "5",
    question:
      "Eu prefiro exercícios mais intensos, como musculação ou corrida. O Pilates ainda é para mim?",
    answer:
      "Pilates complementa perfeitamente outros tipos de exercícios, ajudando a melhorar a força do core, a flexibilidade e a postura, o que pode beneficiar suas atividades de alta intensidade. Além disso, a prática regular de Pilates pode ajudar a prevenir lesões e melhorar seu desempenho em outros esportes e atividades físicas.",
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
    <div className="faq-item w-full max-w-2xl border-b-2 border-gray-300 pb-2">
      <div className="faq-question flex justify-between" onClick={toggleFaq}>
        <span>{question}</span>
        <span className="text-3xl text-gray-600">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="faq-answer p-2">{answer}</div>}
    </div>
  );
};

export default function FAQ() {
  return (
    <div className="flex flex-col items-center gap-2 w-full px-4 my-8" id="faq">
      <h2 className="text-3xl sm:text-4xl py-4 mb-4 font-bold tracking-tight border-b-2">
        Perguntas Frequentes
      </h2>
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
