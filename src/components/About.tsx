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
                Fondée en 2020 par un passionné du web design, WebCraft Pro est née 
                d'une vision simple : démocratiser l'accès à des sites web professionnels 
                pour tous les entrepreneurs et entreprises.
              </p>
              <p className="leading-relaxed">
                Notre mission est de transformer vos idées en expériences digitales 
                remarquables. Nous combinons créativité, expertise technique et 
                compréhension business pour créer des sites qui ne se contentent 
                pas d'être beaux, mais qui performent réellement.
              </p>
              <p className="leading-relaxed">
                Chaque projet est une nouvelle aventure où nous mettons notre 
                savoir-faire au service de votre vision, en respectant vos délais 
                et votre budget.
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
                  <div className="bg-amber-500 p-3 rounded-lg">
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