import { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleStars, setVisibleStars] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    satisfaction: 90,
    rating: 4.9,
    projects: 40
  });
  const statsRef = useRef<HTMLDivElement>(null);

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

  const finalStats = {
    satisfaction: 98,
    rating: 4.9,
    projects: 50
  };

  const startStats = {
    satisfaction: 90,
    rating: 4.9,
    projects: 40
  };

  const animateValue = (start: number, end: number, duration: number, callback: (value: number) => void, isDecimal = false) => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const timer = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max((endTime - now) / duration, 0);
      const value = end - (remaining * (end - start));

      if (isDecimal) {
        callback(Math.min(parseFloat(value.toFixed(1)), end));
      } else {
        callback(Math.min(Math.ceil(value), end));
      }

      if (value >= end) {
        clearInterval(timer);
      }
    }, 16);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsVisible) {
            setStatsVisible(true);

            animateValue(startStats.satisfaction, finalStats.satisfaction, 1000, (value) => {
              setAnimatedStats(prev => ({ ...prev, satisfaction: value }));
            });

            setTimeout(() => {
              animateValue(startStats.projects, finalStats.projects, 1000, (value) => {
                setAnimatedStats(prev => ({ ...prev, projects: value }));
              });
            }, 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [statsVisible]);

  const changeSlide = (newIndex: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 150);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, testimonials.length]);

  const goToSlide = (index: number) => {
    if (index !== currentIndex) {
      changeSlide(index);
    }
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    changeSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    changeSlide(newIndex);
  };

  // Animate stars on testimonial change
  useEffect(() => {
    setVisibleStars(0);
    const total = testimonials[currentIndex].rating;
    let count = 0;

    const interval = setInterval(() => {
      count += 1;
      setVisibleStars(count);
      if (count === total) clearInterval(interval);
    }, 60);

    return () => clearInterval(interval);
  }, [currentIndex]);

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

        <div className="relative max-w-4xl mx-auto px-16">
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 transition-all duration-200 hover:scale-110 active:scale-95 group"
          >
            <ChevronLeft className="h-8 w-8 text-orange-500 group-hover:text-orange-600 group-active:text-orange-700 transition-colors duration-200" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 transition-all duration-200 hover:scale-110 active:scale-95 group"
          >
            <ChevronRight className="h-8 w-8 text-orange-500 group-hover:text-orange-600 group-active:text-orange-700 transition-colors duration-200" />
          </button>

          <div className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 relative transition-all duration-300 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
            }`}>
            <Quote className="absolute top-6 left-6 h-8 w-8 text-amber-600 opacity-20" />

            <div className="text-center mb-8">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover ring-4 ring-orange-100"
              />
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => {
                  const isVisible = i < visibleStars;

                  return (
                    <Star
                      key={i}
                      className={`h-5 w-5 text-amber-400 fill-current transition-all duration-500 ease-out transform
          ${isVisible
                          ? 'opacity-100 scale-100 rotate-0'
                          : 'opacity-0 scale-0 rotate-45'}
        `}
                      style={{
                        transitionDelay: isVisible ? `${i * 80}ms` : '0ms',
                      }}
                    />
                  );
                })}
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
              <p className="text-sm text-orange-600 font-medium">
                {testimonials[currentIndex].project}
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${index === currentIndex
                  ? 'bg-orange-500 scale-125'
                  : 'bg-gray-300 hover:bg-orange-300 hover:scale-110 active:scale-90'
                  }`}
              />
            ))}
          </div>
        </div>

        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center group">
            <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200 font-mono">
              {animatedStats.satisfaction}%
            </div>
            <div className="text-gray-600">Clients Satisfaits</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
              4.9/5
            </div>
            <div className="text-gray-600">Note Moyenne</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200 font-mono">
              {animatedStats.projects}+
            </div>
            <div className="text-gray-600">Projets Réalisés</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
