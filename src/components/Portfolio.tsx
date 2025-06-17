import { useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Magnin Cuisine',
      category: 'artisant',
      image: 'public/magnin.webp',
      description: 'Site vitrine de présentation des services',
      tech: ['Astro', 'Node.js', 'MongoDB'],
      link: 'https://magnin-cuisine.vercel.app/'
    },
    {
      id: 2,
      title: 'La Fille Du Phare',
      category: 'artisant',
      image: 'public/fille_du_phare.webp',
      description: 'Site vitrine de présentation du travail',
      tech: ['ReactJS', 'Tailwind', 'HTML/CSS'],
      link: '#'
    },
    {
      id: 3,
      title: 'Ton projet!',
      category: '',
      image: 'Ton projet!',
      description: 'Laisse nous donner vie à tes idées pour ton site',
      tech: ['Rapidité', 'Précision', 'SAV'],
      link: '#'
    },
  ];

  const filters = [
    { key: 'all', label: 'Tous' },
    { key: 'artisant', label: 'Artisant' },
    { key: 'finance', label: 'Finance' },
    { key: 'startup', label: 'Startup' },
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