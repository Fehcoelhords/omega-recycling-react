import HeroImage from "../assets/images/recycle-background-with-hand-support-sustainable-idea-watercolor.jpg";

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${HeroImage})`,
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
      style={heroStyle}
    >
      {/* Overlay escuro */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-10"></div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 z-20">
        <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-4">
          Seu Futuro É Mais Verde com a{" "}
          <span className="text-secondary">Omega Recycling</span>
        </h1>
        <p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-8">
          Transformando resíduos em valor, conectando comunidades e
          impulsionando a sustentabilidade no Brasil.
        </p>
        <a
          href="#contato"
          className="bg-text-light text-primary font-bold py-3 px-8 rounded-full hover:bg-secondary hover:text-text-dark transition duration-300 transform hover:-translate-y-1 shadow-lg"
        >
          Entrar em Contato
        </a>
      </div>

      {/* EFEITO DEGRADÊ ADICIONADO AQUI */}
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-white to-transparent z-20"></div>
    </section>
  );
};

export default Hero;
