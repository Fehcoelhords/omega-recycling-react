import { useState, useEffect } from "react";
import BenefitsImage from "../assets/images/banner_2.jpg";

const benefitsData = [
  {
    icon: "🌱",
    title: "Impacto Ambiental Genuíno",
    description:
      "Reduza sua pegada de carbono e contribua para um planeta mais limpo.",
  },
  {
    icon: "💡",
    title: "Inovação e Tecnologia",
    description:
      "Soluções inteligentes para uma gestão de resíduos otimizada e eficiente.",
  },
  {
    icon: "📜",
    title: "Valorização da Marca",
    description:
      "Fortaleça sua imagem com práticas sustentáveis e responsáveis.",
  },
  {
    icon: "❤️",
    title: "Engajamento Comunitário",
    description:
      "Incentive a participação e a conscientização ambiental entre todos.",
  },
  {
    icon: "🏆",
    title: "Resultados Comprovados",
    description:
      "Relatórios claros que demonstram o impacto positivo da sua iniciativa.",
  },
  {
    icon: "🛡️",
    title: "Conformidade e Segurança",
    description:
      "Operações alinhadas às normas ambientais, garantindo tranquilidade.",
  },
];

const Benefits = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + benefitsData.length) % benefitsData.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % benefitsData.length);
  };

  const sectionStyle = { backgroundImage: `url(${BenefitsImage})` };

  const cardWidth = isMobile ? 220 : 280;
  const cardHeight = isMobile ? 280 : 330;
  const translateX = isMobile ? 110 : 250;
  const rotateY = isMobile ? 25 : 20;

  return (
    <section
      id="beneficios"
      // --- CÓDIGO CORRIGIDO E SIMPLIFICADO PARA FORÇAR O CENTRO ---
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed p-4"
      style={sectionStyle}
    >
      <div className="absolute inset-0 bg-primary/90"></div>

      <div className="w-full relative z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center text-white mb-8">
          Por Que Escolher a Omega Recycling?
        </h2>

        <div
          className="relative w-full flex justify-center items-center"
          style={{
            perspective: "1200px",
            height: isMobile ? "350px" : "400px",
          }}
        >
          {benefitsData.map((benefit, index) => {
            let positionDiff = index - currentIndex;
            const numItems = benefitsData.length;

            if (positionDiff > numItems / 2) positionDiff -= numItems;
            if (positionDiff < -numItems / 2) positionDiff += numItems;

            const isCenter = positionDiff === 0;

            const style = {
              transform: `
                translateX(${positionDiff * translateX}px)
                translateZ(${isCenter ? 50 : -Math.abs(positionDiff) * 100}px)
                rotateY(${positionDiff * rotateY}deg)
                scale(${isCenter ? 1 : 0.85})
              `,
              opacity: isCenter ? 1 : 0.7,
              zIndex: isCenter ? 10 : 10 - Math.abs(positionDiff),
              transition: "all 0.5s ease-out",
              width: `${cardWidth}px`,
              height: `${cardHeight}px`,
            };

            return (
              <div
                key={index}
                className="absolute bg-white/20 backdrop-blur-md p-4 rounded-lg shadow-lg text-center text-white flex flex-col items-center justify-center"
                style={style}
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold font-montserrat mb-2">
                  {benefit.title}
                </h3>
                <p className="opacity-90 text-sm">{benefit.description}</p>
              </div>
            );
          })}

          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 z-30 bg-black/30 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-2xl hover:bg-black/50 transition-colors"
          >
            &#8249;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 z-30 bg-black/30 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-2xl hover:bg-black/50 transition-colors"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
