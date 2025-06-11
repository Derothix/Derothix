import { useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Restaurant Le Gourmet',
      category: 'restaurant',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Site vitrine avec système de réservation en ligne',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Cabinet d\'Avocat',
      category: 'corporate',
      image: 'https://images.pexels.com/photos/7688374/pexels-photo-7688374.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Site professionnel avec blog et prise de rendez-vous',
      tech: ['WordPress', 'PHP', 'MySQL'],
      link: '#'
    },
    {
      id: 3,
      title: 'Boutique Mode',
      category: 'ecommerce',
      image: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'E-commerce avec paiement sécurisé et gestion stock',
      tech: ['Shopify', 'JavaScript', 'CSS3'],
      link: '#'
    },
    {
      id: 4,
      title: 'Startup Tech',
      category: 'startup',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Landing page optimisée pour la conversion',
      tech: ['Next.js', 'Tailwind', 'Vercel'],
      link: '#'
    },
    {
      id: 5,
      title: 'Agence Immobilière',
      category: 'corporate',
      image: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Plateforme avec recherche avancée de biens',
      tech: ['Vue.js', 'Laravel', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 6,
      title: 'Gym & Fitness',
      category: 'fitness',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Site avec réservation de cours et suivi membres',
      tech: ['React', 'Firebase', 'Stripe'],
      link: '#'
    }
  ];

  const filters = [
    { key: 'all', label: 'Tous' },
    { key: 'restaurant', label: 'Restaurant' },
    { key: 'corporate', label: 'Corporate' },
    { key: 'ecommerce', label: 'E-commerce' },
    { key: 'startup', label: 'Startup' },
    { key: 'fitness', label: 'Fitness' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="creations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Créations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos réalisations récentes. 
            Chaque projet reflète notre engagement envers l'excellence et l'innovation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <a
                      href={project.link}
                      className="inline-flex items-center text-white hover:text-amber-300 transition-colors duration-200"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Voir le site
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-200 font-medium"
          >
            <Code className="mr-2 h-5 w-5" />
            Démarrer votre projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;