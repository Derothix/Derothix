import React from 'react';
import { Globe, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-amber-600" />
              <span className="text-xl font-bold">WebCraft Pro</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Nous créons des expériences web exceptionnelles qui transforment 
              vos idées en succès digitaux. Votre vision, notre expertise.
            </p>
            <div className="flex space-x-4">
              <span className="text-sm text-gray-400">Lausanne, Suisse</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-400">+41 76 123 45 67</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-amber-600 transition-colors duration-200">Sites vitrines</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors duration-200">E-commerce</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors duration-200">Applications web</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors duration-200">Refonte de sites</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors duration-200">Maintenance</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#histoire" className="hover:text-amber-600 transition-colors duration-200">Notre histoire</a></li>
              <li><a href="#creations" className="hover:text-amber-600 transition-colors duration-200">Portfolio</a></li>
              <li><a href="#prix" className="hover:text-amber-600 transition-colors duration-200">Tarifs</a></li>
              <li><a href="#avis" className="hover:text-amber-600 transition-colors duration-200">Témoignages</a></li>
              <li><a href="#contact" className="hover:text-amber-600 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-sm text-gray-400 mb-4 md:mb-0">
            <span>© 2024 WebCraft Pro. Créé avec</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>en Suisse.</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Mentions légales
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Confidentialité
            </a>
            <button
              onClick={scrollToTop}
              className="bg-amber-600 p-2 rounded-full hover:bg-amber-700 transition-colors duration-200"
              aria-label="Retour en haut"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;