import React from 'react';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Créons ensemble votre
              <span className="text-amber-600 block">présence digitale</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Nous transformons vos idées en sites web exceptionnels. 
              Design moderne, performance optimale et expérience utilisateur remarquable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all duration-200 font-medium group"
              >
                Démarrer votre projet
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#creations"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-white rounded-lg hover:border-amber-600 hover:text-amber-600 transition-all duration-200 font-medium"
              >
                Voir nos réalisations
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: Code, title: 'Développement Sur-Mesure', desc: 'Code propre et optimisé pour vos besoins spécifiques' },
              { icon: Palette, title: 'Design Moderne', desc: 'Interface utilisateur intuitive et visuellement impactante' },
              { icon: Zap, title: 'Performance Optimale', desc: 'Sites rapides et optimisés pour le référencement' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-amber-600/50 transition-all duration-300 group"
              >
                <item.icon className="h-8 w-8 text-amber-600 mb-3 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;