import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Standard',
      price: '600',
      icon: Star,
      popular: false,
      description: 'Parfait pour débuter votre présence en ligne',
      features: [
        'Site vitrine 5 pages maximum',
        'Design responsive (mobile/desktop)',
        'Optimisation SEO de base',
        'Formulaire de contact',
        'Hébergement 1 an inclus',
        'Support technique 3 mois',
        'Livraison sous 2 semaines'
      ],
      cta: 'Choisir Standard'
    },
    {
      name: 'Medium',
      price: '1200',
      icon: Zap,
      popular: true,
      description: 'Idéal pour les entreprises en croissance',
      features: [
        'Site jusqu\'à 10 pages',
        'Design sur-mesure premium',
        'Blog intégré avec CMS',
        'Optimisation SEO avancée',
        'Analytics et suivi de performance',
        'Formulaires multiples',
        'Intégrations réseaux sociaux',
        'Support technique 6 mois',
        'Livraison sous 3 semaines'
      ],
      cta: 'Choisir Medium'
    },
    {
      name: 'Custom',
      price: 'Sur devis',
      icon: Crown,
      popular: false,
      description: 'Solution complète pour projets complexes',
      features: [
        'Nombre de pages illimité',
        'Fonctionnalités sur-mesure',
        'E-commerce / Marketplace',
        'Applications web complexes',
        'Intégrations API tierces',
        'Base de données avancée',
        'Espace membre / Dashboard',
        'Support et maintenance 1 an',
        'Formation équipe incluse'
      ],
      cta: 'Demander un devis'
    }
  ];

  return (
    <section id="prix" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nos Prix
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des tarifs transparents adaptés à vos besoins. 
            Pas de frais cachés, pas de surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-800 rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-amber-600 shadow-2xl shadow-amber-600/20' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Le plus populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex p-3 rounded-full mb-4 ${
                  plan.popular ? 'bg-amber-600' : 'bg-gray-700'
                }`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="text-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== 'Sur devis' && <span className="text-gray-400 text-lg">.-</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-200 ${
                  plan.popular
                    ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-lg'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Une question sur nos tarifs ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-amber-600 hover:text-amber-500 font-medium"
          >
            Contactez-nous pour discuter de votre projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;