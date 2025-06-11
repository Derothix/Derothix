import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      role: 'Propriétaire Restaurant Le Gourmet',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      content: 'WebCraft Pro a transformé notre présence en ligne. Le site est magnifique et nos réservations ont augmenté de 40% depuis le lancement. Équipe professionnelle et à l\'écoute.',
      project: 'Site vitrine + réservations'
    },
    {
      id: 2,
      name: 'Pierre Martin',
      role: 'Avocat - Cabinet Martin & Associés',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      content: 'Un travail d\'une qualité exceptionnelle. Le site reflète parfaitement le sérieux de notre cabinet tout en restant moderne. Nos clients apprécient la facilité de prise de rendez-vous.',
      project: 'Site corporate + blog'
    },
    {
      id: 3,
      name: 'Sophie Laurent',
      role: 'Fondatrice Boutique Élégance',
      avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      content: 'Notre boutique en ligne dépasse toutes nos attentes. Interface intuitive, paiements sécurisés et design élégant. Les ventes ont triplé en 6 mois !',
      project: 'E-commerce complet'
    },
    {
      id: 4,
      name: 'Thomas Roux',
      role: 'CEO TechStart Solutions',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      content: 'Landing page parfaite pour notre startup. Taux de conversion excellent et design qui inspire confiance. Bravo pour le respect des délais !',
      project: 'Landing page startup'
    },
    {
      id: 5,
      name: 'Amélie Garnier',
      role: 'Directrice Immobilier Plus',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      content: 'La plateforme de recherche immobilière fonctionne parfaitement. Nos clients trouvent facilement ce qu\'ils cherchent. Un investissement très rentable.',
      project: 'Plateforme immobilière'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section id="avis" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Avis Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez ce que nos clients disent de notre travail. 
            Leur satisfaction est notre plus belle récompense.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-amber-600 opacity-20" />
            
            <div className="text-center mb-8">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
            </div>

            <blockquote className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="text-center">
              <h4 className="font-bold text-gray-900 text-lg">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-600 mb-2">{testimonials[currentIndex].role}</p>
              <p className="text-sm text-amber-600 font-medium">
                {testimonials[currentIndex].project}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-amber-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-amber-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-amber-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600">Clients Satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-gray-600">Note Moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600">Projets Réalisés</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;