import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import CollectionCard from '@/components/CollectionCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Import images
import bowl1 from '@/assets/bowl-1.jpg';
import bowl2 from '@/assets/bowl-2.jpg';
import bowl3 from '@/assets/bowl-3.jpg';
import heroBowl from '@/assets/hero-bowl.jpg';
import bowlsCollection from '@/assets/bowls-collection.jpg';

const Collections = () => {
  const { t } = useLanguage();

  const collections = [
    {
      title: t('collections.minimalist.title'),
      description: t('collections.minimalist.desc'),
      image: bowl2,
      itemCount: 8,
    },
    {
      title: t('collections.colorful.title'),
      description: t('collections.colorful.desc'),
      image: bowlsCollection,
      itemCount: 12,
    },
    {
      title: t('collections.classic.title'),
      description: t('collections.classic.desc'),
      image: bowl1,
      itemCount: 6,
    },
    {
      title: 'Colección Premium',
      description: 'Piezas exclusivas diseñadas por artistas reconocidos, para los más exigentes.',
      image: heroBowl,
      itemCount: 4,
    },
    {
      title: 'Colección Sustainable',
      description: 'Bowls eco-friendly fabricados con materiales sostenibles y procesos responsables.',
      image: bowl3,
      itemCount: 10,
    },
    {
      title: 'Colección Kids',
      description: 'Diseños divertidos y seguros, perfectos para los más pequeños de la casa.',
      image: bowlsCollection,
      itemCount: 15,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-display text-foreground">
              {t('collections.title')}
            </h1>
            <p className="text-elegant max-w-3xl mx-auto">
              {t('collections.subtitle')}
            </p>
          </div>

          {/* Featured Collection */}
          <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  <span>Nuevo</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-foreground">
                  Colección Otoño 2024
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Inspirada en los colores cálidos de la temporada, esta nueva colección combina 
                  tonos tierra con acabados únicos que evocan la comodidad del hogar.
                </p>
                <Button size="lg" className="group">
                  Explorar colección
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              
              <div className="aspect-square rounded-2xl overflow-hidden bg-card shadow-card">
                <img
                  src={heroBowl}
                  alt="Colección Otoño 2024"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Collections Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <CollectionCard key={index} {...collection} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collections;