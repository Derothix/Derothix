import { ArrowRight, Code, Palette, Zap, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[10%] pb-16">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Left Side */}
          <motion.div variants={fadeUp} className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Créons ensemble votre
              <motion.span
                className="text-amber-600 block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                présence digitale
              </motion.span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              Nous transformons vos idées en sites web exceptionnels. Design
              moderne, performance optimale et expérience utilisateur remarquable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all duration-200 font-medium group"
              >
                Démarrer votre projet
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
              <motion.a
                href="#creations"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-white rounded-lg hover:border-amber-600 hover:text-amber-600 transition-all duration-200 font-medium"
              >
                Voir nos réalisations
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side – Feature Cards */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            variants={container}
          >
            {[
              {
                icon: Code,
                title: 'Développement Sur-Mesure',
                desc: 'Code propre et optimisé pour vos besoins spécifiques',
              },
              {
                icon: Palette,
                title: 'Design Moderne',
                desc: 'Interface utilisateur intuitive et visuellement impactante',
              },
              {
                icon: Zap,
                title: 'Performance Optimale',
                desc: 'Sites rapides et optimisés pour le référencement',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-amber-600/50 transition-all duration-300 group"
              >
                <item.icon className="h-8 w-8 text-amber-600 mb-3 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-600"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
