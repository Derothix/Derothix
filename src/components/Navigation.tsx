import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#histoire', label: 'Notre Histoire' },
    { href: '#creations', label: 'Nos Créations' },
    { href: '#prix', label: 'Nos Prix' },
    { href: '#avis', label: 'Avis Clients' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    // Small delay to allow mobile menu to close
    setTimeout(() => {
      const element = document.getElementById(href.slice(1));
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-amber-600" />
              <span className="text-xl font-bold text-white">Derothix</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                  <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-300 hover:text-amber-600 transition-colors duration-200 font-medium cursor-pointer px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                  >
                    {link.label}
                  </button>

              ))}
              <button
                  onClick={() => handleNavClick('#contact')}
                  className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200 font-medium cursor-pointer"
              >
                Demander un devis
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white hover:text-amber-600 transition-colors duration-200"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
              <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navLinks.map((link) => (
                      <button
                          key={link.href}
                          onClick={() => handleNavClick(link.href)}
                          className="block w-full text-left px-3 py-2 text-gray-300 hover:text-amber-600 transition-colors duration-200 cursor-pointer"
                      >
                        {link.label}
                      </button>
                  ))}
                  <button
                      onClick={() => handleNavClick('#contact')}
                      className="block w-full text-left bg-amber-600 text-white px-3 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200 font-medium mt-4 cursor-pointer"
                  >
                    Demander un devis
                  </button>
                </div>
              </div>
          )}
        </div>
      </nav>
  );
};

export default Navigation;