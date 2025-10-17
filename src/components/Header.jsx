import { useState, useEffect } from "react";
import Logo from "../assets/images/logo.jpeg";

const Header = () => {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Estado para controlar se a página foi rolada
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito para adicionar um listener de scroll na página
  useEffect(() => {
    const handleScroll = () => {
      // Se o scroll for maior que 50px, muda o estado para true
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Adiciona o evento quando o componente é montado
    window.addEventListener("scroll", handleScroll);

    // Remove o evento quando o componente é desmontado (boa prática)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // O array vazio [] garante que este efeito rode apenas uma vez

  // Função para a rolagem suave
  const scrollToSection = (event, sectionId) => {
    event.preventDefault(); // Previne o comportamento padrão do link
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
    // Fecha o menu mobile ao clicar num link
    setIsMenuOpen(false);
  };

  // Define as classes da navbar com base no estado de 'isScrolled'
  const navClasses = isScrolled
    ? "bg-primary-darker/95 shadow-lg"
    : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navClasses}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "hero")}
            className="flex items-center space-x-2"
          >
            <img src={Logo} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="text-white font-montserrat font-bold text-xl">
              Omega Recycling
            </span>
          </a>

          {/* Menu para telas grandes */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, "hero")}
              className="text-text-light font-medium py-2 px-4 hover:text-secondary transition duration-300"
            >
              Início
            </a>
            <a
              href="#sobre"
              onClick={(e) => scrollToSection(e, "sobre")}
              className="text-text-light font-medium py-2 px-4 hover:text-secondary transition duration-300"
            >
              Sobre Nós
            </a>
            <a
              href="#servicos"
              onClick={(e) => scrollToSection(e, "servicos")}
              className="text-text-light font-medium py-2 px-4 hover:text-secondary transition duration-300"
            >
              Serviços
            </a>
            <a
              href="#beneficios"
              onClick={(e) => scrollToSection(e, "beneficios")}
              className="text-text-light font-medium py-2 px-4 hover:text-secondary transition duration-300"
            >
              Benefícios
            </a>
            <a
              href="#processo"
              onClick={(e) => scrollToSection(e, "processo")}
              className="text-text-light font-medium py-2 px-4 hover:text-secondary transition duration-300"
            >
              Como Funciona
            </a>
            <a
              href="#contato"
              onClick={(e) => scrollToSection(e, "contato")}
              className="bg-secondary text-text-dark font-bold ml-4 py-2 px-6 rounded-full hover:bg-yellow-300 transition duration-300 transform hover:-translate-y-1 shadow-md"
            >
              Fale Conosco
            </a>
          </div>

          {/* Botão do menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile (aparece e desaparece) */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-darker pb-4">
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "hero")}
            className="block text-text-light text-center py-2 px-4 hover:bg-primary transition duration-300"
          >
            Início
          </a>
          <a
            href="#sobre"
            onClick={(e) => scrollToSection(e, "sobre")}
            className="block text-text-light text-center py-2 px-4 hover:bg-primary transition duration-300"
          >
            Sobre Nós
          </a>
          <a
            href="#servicos"
            onClick={(e) => scrollToSection(e, "servicos")}
            className="block text-text-light text-center py-2 px-4 hover:bg-primary transition duration-300"
          >
            Serviços
          </a>
          <a
            href="#beneficios"
            onClick={(e) => scrollToSection(e, "beneficios")}
            className="block text-text-light text-center py-2 px-4 hover:bg-primary transition duration-300"
          >
            Benefícios
          </a>
          <a
            href="#processo"
            onClick={(e) => scrollToSection(e, "processo")}
            className="block text-text-light text-center py-2 px-4 hover:bg-primary transition duration-300"
          >
            Como Funciona
          </a>
          <a
            href="#contato"
            onClick={(e) => scrollToSection(e, "contato")}
            className="block mt-2 mx-4 bg-secondary text-text-dark font-bold py-2 px-6 rounded-full text-center hover:bg-yellow-300 transition duration-300 shadow-md"
          >
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
