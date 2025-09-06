import React, { useEffect } from 'react';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import CategorySection from '../components/CategorySection/CategorySection';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import BlogSection from '../components/BlogSection/BlogSection';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Get featured products (best sellers and new)
  const featuredProducts = products.filter(product => 
    product.isBestSeller || product.isNew
  ).slice(0, 8);

  return (
    <div className="pt-16 lg:pt-20">
      <HeroBanner />
      
      <CategorySection />

      {/* Featured Products Section */}
      <section className="py-16 animate-on-scroll animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary-text mb-4 animate-typewriter">
              Productos Destacados
            </h2>
            <p className="text-secondary-text text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Nuestros productos más queridos y las últimas innovaciones en cuidado natural
            </p>
          </div>

          <div className="animate-stagger-in">
            <ProductGrid products={featuredProducts} />
          </div>

          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
            <a
              href="/productos"
              className="inline-block bg-raspberry text-white px-8 py-3 rounded-full font-medium hover:bg-raspberry/90 transition-all duration-300 btn-primary hover:scale-105 animate-pulse-glow"
            >
              Ver Todos los Productos
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-sage-green/10 animate-on-scroll animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-sage-green rounded-full flex items-center justify-center animate-float">
                <span className="text-white font-serif text-xl">🌱</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 animate-typewriter">100% Natural</h3>
              <p className="text-secondary-text animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Ingredientes botánicos cuidadosamente seleccionados
              </p>
            </div>
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-raspberry rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '0.2s' }}>
                <span className="text-white font-serif text-xl">🧪</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 animate-typewriter" style={{ animationDelay: '0.2s' }}>Ciencia Comprobada</h3>
              <p className="text-secondary-text animate-fade-in" style={{ animationDelay: '0.6s' }}>
                Fórmulas respaldadas por investigación dermatológica
              </p>
            </div>
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-rose-quartz rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '0.4s' }}>
                <span className="text-white font-serif text-xl">✨</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 animate-typewriter" style={{ animationDelay: '0.4s' }}>Resultados Visibles</h3>
              <p className="text-secondary-text animate-fade-in" style={{ animationDelay: '0.8s' }}>
                Transformación real en tiempo récord
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;