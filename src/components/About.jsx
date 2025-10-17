import AboutImage from "../assets/images/quem_somos.jpeg";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img
              src={AboutImage}
              className="w-full h-auto rounded-lg shadow-2xl"
              alt="Equipe Omega Recycling"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-primary-darker mb-6">
              Quem Sou: Inovação e Compromisso Ambiental
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Eu sou a Omega Recycling, uma consultora individual apaixonada por
              sustentabilidade e gestão de resíduos. Meu objetivo é simplificar
              a reciclagem, tornando-a acessível e eficiente para condomínios,
              empresas e instituições, sempre com foco em resultados positivos e
              duradouros.
            </p>
            <p className="text-md text-gray-600 leading-relaxed">
              Com experiência prática e um compromisso genuíno com o meio
              ambiente, ofereço consultoria especializada e apoio na
              implementação de práticas que transformam o cenário da reciclagem,
              contribuindo para um futuro mais verde para todos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
