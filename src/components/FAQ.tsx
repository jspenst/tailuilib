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
    question: "Qual é o objetivo do Pilates?",
    answer:
      "O Pilates é um sistema de exercícios desenvolvido por Joseph Pilates no início do século 20. Ele se concentra no fortalecimento dos músculos centrais, melhorando a postura e a flexibilidade, e promovendo a consciência corporal.",
  },
  {
    id: "3",
    question: "Quem pode fazer Pilates?",
    answer:
      "O Pilates é um sistema de exercícios desenvolvido por Joseph Pilates no início do século 20. Ele se concentra no fortalecimento dos músculos centrais, melhorando a postura e a flexibilidade, e promovendo a consciência corporal.",
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
    <div className="flex flex-col items-center gap-2 w-full px-4 my-8">
      <h2 className="text-3xl sm:text-4xl py-4 mb-4 font-bold tracking-tight border-b-2">
        Perguntas Frequentes
      </h2>
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
