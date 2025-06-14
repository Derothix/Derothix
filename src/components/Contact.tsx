import { useState } from 'react';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Info,
} from 'lucide-react';
import toast from 'react-hot-toast';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

        toast.success('Message envoyé avec succès ! Nous vous répondrons sous 24h.');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à donner vie à votre projet ? Parlons-en ensemble ! Nous vous
            répondons sous 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Parlons de votre projet
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-amber-600 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Téléphone</div>
                  <div className="text-gray-600">+41 79 366 14 61</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-amber-600 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">derothix@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-amber-600 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Adresse</div>
                  <div className="text-gray-600">Attalens, Suisse</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-100 p-3 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-200 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="mt-8 p-6 bg-stone-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-4">
                Questions fréquentes
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Délai moyen : 1-3 semaines selon le projet</li>
                <li>• Devis gratuit sous 24h</li>
                <li>• Paiement en 3 fois possible</li>
                <li>• Modifications incluses pendant le développement</li>
                <li>• Formation à l'utilisation offerte</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
                >
                  Type de projet *
                  <div className="ml-2 relative group cursor-pointer">
                    <Info className="h-4 w-4 text-gray-500 hover:text-amber-600" />
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-sm text-gray-700 p-2 rounded-lg shadow-md w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                      Le type de projet peut être modifié lors du devis.
                    </div>
                  </div>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Sélectionnez un type de projet</option>
                  <option value="Standard">Standard</option>
                  <option value="Medium">Medium</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Décrivez votre projet en quelques mots*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200"
                  placeholder="Parlez-nous de votre projet, vos objectifs, votre budget approximatif..."
                />
              </div>

          

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 text-white py-4 px-6 rounded-lg hover:bg-amber-700 transition-all duration-200 font-medium flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
