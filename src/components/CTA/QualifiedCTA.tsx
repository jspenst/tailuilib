"use client";
import Flag from "react-world-flags";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function QualifiedCTA() {
  type CountryCode = {
    name: string;
    code: string;
    flag: string; // código da bandeira
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("+55");
  const [selectedCountryFlag, setSelectedCountryFlag] = useState<string>("BR");

  // Lista de países com bandeiras e seus códigos
  const countryCodes: CountryCode[] = [
    { name: "Brasil", code: "+55", flag: "BR" },
    { name: "Estados Unidos", code: "+1", flag: "US" },
    { name: "Reino Unido", code: "+44", flag: "GB" },
    // Adicione mais países conforme necessário
  ];

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    // Envia os dados para o backend (Strapi)
    try {
      const response = await fetch(
        "https://pagesapi.engajamedesign.com.br/api/leads/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer fca13ee1e288bf46ac07a37ee7d0c502056febcb9ef7c5c77d8b71a492da85b37f54de5fdc610e0621826ff8ca0f07c44c9b04ef78672e57d08919ec205527f816bab8baf9a5e7a795dd36116c442686e45fa9ba659f4b8ebe4b79ef48eaa6124f09ae51c0da6168c987cea07d7f959c21e1d19c949c9fc7ad6046cc225d75dd",
          },
          body: JSON.stringify({
            data: {
              client: 1,
              name: name,
              email: email,
              phone: selectedCountryCode + " " + phone,
            },
          }),
        }
      );

      if (response.ok) {
        console.log("Dados enviados com sucesso");
      } else {
        const errorResponse = await response.json();
        console.error("Erro ao enviar dados", errorResponse);
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }

    // Abre a conversa no WhatsApp
    const whatsappLink =
      "https://wa.me/5548992188987?text=Quero%20solicitar%20um%20or%C3%A7amento!&app_absent=1";
    window.open(whatsappLink, "_blank");
  };

  const formatPhoneNumber = (value: string) => {
    // Remove tudo que não for dígito
    const cleaned = value.replace(/\D/g, "");

    // Formatação condicional conforme o comprimento do número
    if (cleaned.length <= 2) {
      return `(${cleaned}`;
    } else if (cleaned.length <= 6) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    } else if (cleaned.length <= 10) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(
        6
      )}`;
    } else {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(
        7,
        11
      )}`;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setPhone(formatPhoneNumber(inputValue));
  };

  // Callback para quando o código do país é selecionado
  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = countryCodes.find(
      (country) => country.code === e.target.value
    );
    if (selectedCountry) {
      setSelectedCountryCode(selectedCountry.code);
      setSelectedCountryFlag(selectedCountry.flag);
    }
  };

  return (
    <form
      className="flex flex-col gap-2 w-full items-start"
      onSubmit={handleFormSubmit}
    >
      <label htmlFor="name" className="font-bold">
        Nome:
      </label>
      <input
        className="border border-gray-500 rounded-md w-full px-2"
        id="name"
        type="text"
        placeholder="Seu Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      ></input>
      <label htmlFor="e-mail" className="font-bold">
        Seu melhor e-mail:
      </label>
      <input
        className="border border-gray-500 rounded-md w-full px-2"
        id="e-mail"
        type="email"
        placeholder="seuemail@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      ></input>
      <div className="flex flex-col gap-2 items-start">
        <label htmlFor="phone" className="font-bold">
          WhatsApp:
        </label>
        <div className="flex gap-1">
          <span className="rounded-md py-1 flex">
            <span className="w-4">
              <Flag
                code={selectedCountryFlag}
                style={{ width: "24px", height: "24px" }}
              />
            </span>
            <select
              id="country-code"
              value={selectedCountryCode}
              onChange={handleCountryCodeChange}
              className="rounded-md w-fit"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.code}
                </option>
              ))}
            </select>
          </span>
          <input
            className="border border-gray-500 rounded-md w-full px-2 flex justify-center"
            id="phone"
            type="tel"
            placeholder="(99) 99999-9999"
            value={phone}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="rounded-md bg-primary px-3 py-2.5 my-4 text-xl font-semibold text-black hover:text-[#F1B145] shadow-sm hover:bg-black flex items-center gap-4 transition ease duration-300"
        >
          VAMOS CONVERSAR <FaWhatsapp />
        </button>
      </div>
    </form>
  );
}
