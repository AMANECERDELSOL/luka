import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Cuidado Facial',
    path: '/productos/facial',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Sérums, limpiadores e hidratantes'
  },
  {
    name: 'Maquillaje',
    path: '/productos/maquillaje',
    image: 'https://images.pexels.com/photos/4041433/pexels-photo-4041433.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Bases, labiales y más'
  },
  {
    name: 'Cuidado Corporal',
    path: '/productos/corporal',
    image: 'https://images.pexels.com/photos/4041437/pexels-photo-4041437.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Aceites y cremas nutritivas'
  },
  {
    name: 'Kits y Regalos',
    path: '/productos/kits',
    image: 'https://images.pexels.com/photos/4041421/pexels-photo-4041421.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Rutinas completas'
  }
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-16 bg-rose-quartz/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary-text mb-4">
            Explora Nuestras Categorías
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Descubre productos formulados específicamente para cada necesidad de tu piel
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold text-primary-text mb-2 group-hover:text-raspberry transition-colors">
                  {category.name}
                </h3>
                <p className="text-secondary-text text-sm">
                  {category.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;