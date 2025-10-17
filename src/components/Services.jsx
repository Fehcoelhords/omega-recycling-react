const servicesData = [
  {
    icon: "🔬",
    title: "Diagnóstico e Consultoria",
    description:
      "Análise aprofundada da sua infraestrutura e necessidades para desenvolver um plano de reciclagem personalizado e eficaz.",
  },
  {
    icon: "🔨",
    title: "Implantação de Infraestrutura",
    description:
      "Apoio na implementação de sistemas modernos e otimizados, incluindo orientação para lixeiras e pontos de coleta seletiva.",
  },
  {
    icon: "🧑‍🏫",
    title: "Educação e Conscientização",
    description:
      "Programas de treinamento e workshops para engajar moradores e colaboradores em hábitos de reciclagem e sustentabilidade.",
  },
  {
    icon: "📊",
    title: "Monitoramento e Relatórios",
    description:
      "Acompanhamento do desempenho da reciclagem e elaboração de relatórios que demonstram o impacto ambiental positivo.",
  },
  {
    icon: "🤝",
    title: "Assessoria Contínua",
    description:
      "Suporte e orientação para garantir a eficiência e a sustentabilidade das práticas de gestão de resíduos a longo prazo.",
  },
  {
    icon: "💡",
    title: "Projetos Customizados",
    description:
      "Desenvolvimento de soluções sob medida para desafios específicos ou grandes projetos que demandam uma abordagem única.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center text-primary-darker mb-12">
          Meus Serviços: Soluções Diretas para Sua Sustentabilidade
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-4xl text-primary mb-4" role="img">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-montserrat text-primary-darker mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
