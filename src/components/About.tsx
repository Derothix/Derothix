import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="histoire" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre Histoire
            </h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Nous, c’est Maxime et Valentin. Tous les deux diplômés d’un CFC en développement d’applications,
                on partage depuis toujours une passion commune pour la création web et l’entrepreneuriat.
              </p>
              <p className="leading-relaxed">
                Originaires d’Attalens, on a grandi avec l’envie de bâtir quelque chose qui nous ressemble.
                En 2025, après plusieurs années d’expérience et de projets personnels, on décide enfin de lancer notre
                propre startup de création digitale.
              </p>
              <p className="leading-relaxed">
                Notre objectif est simple : rendre accessible à tous un web de qualité, beau, rapide et adapté aux besoins
                concrets des entreprises. Que vous soyez une petite entreprise, un indépendant ou une startup ambitieuse,
                on vous accompagne pour donner vie à votre présence en ligne.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {[
              {
                icon: Users,
                number: '2+',
                label: 'Clients Satisfaits',
                desc: 'Entrepreneurs et entreprises nous font confiance'
              },
              {
                icon: Target,
                number: '100%',
                label: 'Projets Livrés',
                desc: 'Respect des délais et de la qualité promise'
              },
              {
                icon: Award,
                number: '1 ans',
                label: 'D\'Excellence',
                desc: 'Innovation constante dans le web design'
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-600 p-3 rounded-lg">
                    <stat.icon className="h-6 w-6 text-gray-800" />
                  </div>

                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="font-semibold text-gray-800">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;