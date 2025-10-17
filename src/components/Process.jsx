import ProcessVideo from "../assets/images/video_html.mp4";

const Process = () => {
  return (
    <section id="processo" className="py-20 bg-bg-dark text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-secondary mb-4">
          Veja Como a Reciclagem Acontece na Prática
        </h2>
        <p className="text-lg opacity-75 mb-8 max-w-2xl mx-auto">
          Uma visão simples e clara do processo de coleta seletiva básica e sua
          jornada até a transformação.
        </p>

        <div className="relative w-full max-w-4xl mx-auto rounded-lg shadow-2xl overflow-hidden aspect-video">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
          >
            <source src={ProcessVideo} type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Sua Contribuição Faz a Diferença!
            </h3>
            <p className="text-md md:text-lg text-white mb-6 max-w-lg">
              Com passos simples, transformamos o futuro do nosso planeta.
            </p>
            <a
              href="#contato"
              className="bg-text-light text-primary-darker font-bold py-3 px-8 rounded-full hover:bg-secondary hover:text-text-dark transition duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              Fale Conosco para Implementar
            </a>
          </div>
        </div>
        <p className="text-gray-400 mt-4 text-sm">
          *Animação ilustrativa do processo de coleta seletiva básica.
        </p>
      </div>
    </section>
  );
};

export default Process;
