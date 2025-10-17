import Logo from "../assets/images/logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Função para a rolagem suave
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-bg-dark text-gray-300 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          {/* Coluna 1: Logo e Sobre */}
          <div className="mb-6 md:mb-0">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, "hero")}
              className="flex items-center mb-4"
            >
              <img
                src={Logo}
                alt="Logo Omega Recycling"
                className="h-12 w-12 rounded-full mr-3"
              />
              <span className="text-white font-montserrat font-bold text-2xl">
                Omega Recycling
              </span>
            </a>
            <p className="text-gray-400 text-sm">
              Transformando resíduos em valor, conectando comunidades e
              impulsionando a sustentabilidade no Brasil.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-white font-bold font-montserrat mb-4 tracking-wider">
              Navegação
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => scrollToSection(e, "sobre")}
                  className="hover:text-secondary transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => scrollToSection(e, "servicos")}
                  className="hover:text-secondary transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  onClick={(e) => scrollToSection(e, "beneficios")}
                  className="hover:text-secondary transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#processo"
                  onClick={(e) => scrollToSection(e, "processo")}
                  className="hover:text-secondary transition-colors"
                >
                  Como Funciona
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="text-white font-bold font-montserrat mb-4 tracking-wider">
              Contato
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                <a
                  href="mailto:Contato@omegarecyclingbrasil.com.br"
                  className="hover:text-secondary transition-colors"
                >
                  Contato@omegarecyclingbrasil.com.br
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                <span>São Paulo, SP, Brasil</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div>
            <h3 className="text-white font-bold font-montserrat mb-4 tracking-wider">
              Siga-nos
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/omegarecyclingbrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white bg-gray-800 hover:bg-secondary p-3 rounded-full transition-all duration-300"
                aria-label="Instagram"
              >
                {/* --- LOGO DO INSTAGRAM CORRIGIDO --- */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {currentYear} Omega Recycling Brasil. Todos os direitos
            reservados - Desenvolvido por Felipe Coelho.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
