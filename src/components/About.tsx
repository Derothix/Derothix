import { Users, Target, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      delay: i * 0.1, // effet domino rapide
    },
  }),
};

const About = () => {
  return (
    <section id="histoire" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texte de gauche */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideLeft}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre Histoire
            </h2>
            <div className="space-y-6 text-gray-700 text-justify">
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
          </motion.div>

          {/* Cartes animées depuis la droite */}
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
                number: '1 an',
                label: "D'Excellence",
                desc: 'Innovation constante dans le web design'
              }
            ].map((stat, index) => (
<motion.div
  key={index}
  custom={index}
  variants={slideRight}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  whileHover={{
    scale: 1.05,
    y: -6,
    boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.1)', // ombre plus visible au hover
  }}
  className="bg-white p-6 rounded-xl shadow-sm transition-all duration-150"
>
  <div className="flex items-start space-x-4">
    <div className="bg-amber-600 p-3 rounded-lg shadow-sm">
      <stat.icon className="h-6 w-6 text-white" />
    </div>
    <div>
      <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
      <div className="text-base font-semibold text-gray-800">{stat.label}</div>
      <div className="text-sm text-gray-600">{stat.desc}</div>
    </div>
  </div>
</motion.div>





            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
