export default function HeroSection() {
  return (
    <div className="relative isolate h-[calc(100vh-85px)]">
      <div className="absolute w-full h-[calc(100vh-85px)] bg-bg-hero-small md:bg-hero-bg bg-cover bg-top"></div>
      <div className="absolute w-full h-[calc(100vh-85px)] bg-black opacity-60"></div>
      {/*Conteudo*/}
      <div className="absolute w-full h-[calc(100vh-85px)] flex flex-col items-center mx-auto py-32 sm:py-48 lg:py-56 px-6 lg:px-8 ">
        {/* 
        <div className="hidden max-w-2xl sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding.{" "}
            <a href="#" className="font-semibold text-primary">
              <span className="absolute inset-0" aria-hidden="true" />
              Saiba mais <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        */}
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Redefina seus limites com nossos treinos de Pilates
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            Venha experimentar uma aula gratuita e veja por si mesmo como o
            Pilates pode melhorar sua qualidade de vida. Agende sua primeira
            aula hoje mesmo!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://api.whatsapp.com/send/?phone=5548991537664&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+aula+experimental%21&type=phone_number&app_absent=1"
              target="_blank"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#17ac98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Agendar uma aula
            </a>
            <a
              href="#features"
              className="text-sm font-semibold leading-6 text-white"
            >
              Saiba mais <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
