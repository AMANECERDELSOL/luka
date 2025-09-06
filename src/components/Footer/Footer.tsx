import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-raspberry" />
              <span className="font-serif text-xl font-semibold text-primary-text">
                Luka Natural
              </span>
            </Link>
            <p className="text-secondary-text text-sm leading-relaxed">
              Belleza natural, ciencia comprobada. Productos de cuidado personal 
              formulados con ingredientes botánicos de la más alta calidad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <Instagram className="h-5 w-5 text-secondary-text hover:text-raspberry" />
              </a>
              <a href="#" className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <Facebook className="h-5 w-5 text-secondary-text hover:text-raspberry" />
              </a>
              <a href="#" className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <Twitter className="h-5 w-5 text-secondary-text hover:text-raspberry" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-primary-text mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {['Productos', 'Sobre Nosotros', 'Blog', 'Contacto', 'Mi Cuenta'].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-secondary-text hover:text-raspberry transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-primary-text mb-4">
              Servicio al Cliente
            </h3>
            <ul className="space-y-2">
              {[
                'Centro de Ayuda',
                'Envíos y Devoluciones',
                'Política de Privacidad',
                'Términos y Condiciones',
                'Preguntas Frecuentes'
              ].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-secondary-text hover:text-raspberry transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-primary-text mb-4">
              Contacto
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-raspberry" />
                <span className="text-secondary-text text-sm">+57 (1) 234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-raspberry" />
                <span className="text-secondary-text text-sm">hola@lukanatural.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-raspberry" />
                <span className="text-secondary-text text-sm">Bogotá, Colombia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-secondary-text text-sm">
            © 2025 Luka Natural Elegance. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="text-secondary-text text-sm">Pagos seguros</span>
            <span className="text-secondary-text text-sm">Envío gratis desde $150.000</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;