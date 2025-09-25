import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductCard from '@/components/ProductCard';
import CollectionCard from '@/components/CollectionCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Sparkles } from 'lucide-react';

// Import images
import heroBowl from '@/assets/hero-bowl.jpg';
import bowlsCollection from '@/assets/bowls-collection.jpg';
import bowl1 from '@/assets/bowl-1.jpg';
import bowl2 from '@/assets/bowl-2.jpg';
import bowl3 from '@/assets/bowl-3.jpg';

const Index = () => {
  const { t } = useLanguage();

  const products = [
    {
      name: t('product.wooden.name'),
      description: t('product.wooden.desc'),
      price: '€24.99',
      originalPrice: '€29.99',
      image: bowl1,
      features: [t('features.foodGrade'), t('features.dishwasherSafe')],
      materials: [t('materials.wood')],
      promotion: t('products.promotion'),
    },
    {
      name: t('product.ceramic.name'),
      description: t('product.ceramic.desc'),
      price: '€19.99',
      image: bowl2,
      features: [t('features.foodGrade'), t('features.microwaveSafe'), t('features.ovenSafe')],
      materials: [t('materials.ceramic')],
    },
    {
      name: t('product.minimalist.name'),
      description: t('product.minimalist.desc'),
      price: '€34.99',
      image: bowl3,
      features: [t('features.foodGrade'), t('features.microwaveSafe')],
      materials: [t('materials.ceramic')],
    },
  ];

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
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-hero text-foreground">
                  {t('hero.title')}
                </h1>
                <p className="text-elegant max-w-lg">
                  {t('hero.subtitle')}
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button size="lg" className="px-8 py-6 text-base group">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm">{t('products.from')} €19.99</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-card-neutral shadow-elegant">
                <img
                  src={heroBowl}
                  alt={t('hero.title')}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Features */}
              <div className="absolute -top-4 -right-4 bg-card shadow-card rounded-2xl p-4 border">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">{t('features.foodGrade')}</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card shadow-card rounded-2xl p-4 border">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">{t('features.ovenSafe')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-display text-foreground">
              {t('products.title')}
            </h2>
            <p className="text-elegant max-w-2xl mx-auto">
              {t('products.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-display text-foreground">
              {t('collections.title')}
            </h2>
            <p className="text-elegant max-w-2xl mx-auto">
              {t('collections.subtitle')}
            </p>
          </div>

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

export default Index;