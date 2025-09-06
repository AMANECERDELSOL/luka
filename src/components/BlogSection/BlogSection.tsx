import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

const BlogSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary-text mb-4">
            Consejos de Belleza Natural
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Aprende sobre cuidado de la piel, ingredientes naturales y rutinas efectivas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-xs text-secondary-text">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime} min de lectura</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary-text group-hover:text-raspberry transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-secondary-text text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-raspberry text-sm font-medium group-hover:space-x-2 transition-all">
                    <span>Leer más</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-block border border-raspberry text-raspberry px-8 py-3 rounded-full font-medium hover:bg-raspberry hover:text-white transition-all duration-300"
          >
            Ver Todos los Artículos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;