export default function Location() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <h2 className="text-3xl sm:text-4xl py-4 mb-4 font-bold tracking-tight border-b-2">
        Localização
      </h2>
      <div className="w-full max-w-4xl m-8 shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5487.624131465711!2d-48.40307276809827!3d-27.44198119414656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95274201d809d283%3A0x4268c25465ecb285!2sCore%20Pilates!5e0!3m2!1spt-BR!2sbr!4v1721680942981!5m2!1spt-BR!2sbr"
          width="100%"
          height="600"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
