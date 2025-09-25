import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Filter, Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import images
import bowl1 from '@/assets/bowl-1.jpg';
import bowl2 from '@/assets/bowl-2.jpg';
import bowl3 from '@/assets/bowl-3.jpg';
import heroBowl from '@/assets/hero-bowl.jpg';
import bowlsCollection from '@/assets/bowls-collection.jpg';

const Products = () => {
  const { t } = useLanguage();

  const allProducts = [
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
    {
      name: 'Bowl Premium Verde',
      description: 'Diseño exclusivo con interior esmaltado en verde y acabado exterior mate.',
      price: '€42.99',
      image: heroBowl,
      features: [t('features.foodGrade'), t('features.microwaveSafe'), t('features.ovenSafe')],
      materials: [t('materials.ceramic')],
    },
    {
      name: 'Set de Bowls Multicolor',
      description: 'Conjunto de tres bowls en tonos vibrantes, perfecto para presentaciones coloridas.',
      price: '€59.99',
      originalPrice: '€69.99',
      image: bowlsCollection,
      features: [t('features.foodGrade'), t('features.microwaveSafe'), t('features.dishwasherSafe')],
      materials: [t('materials.ceramic')],
      promotion: 'Set especial: 3x2',
    },
    {
      name: 'Bowl Artesanal Beige',
      description: 'Pieza única hecha a mano con técnicas tradicionales de cerámica.',
      price: '€38.99',
      image: bowl2,
      features: [t('features.foodGrade'), t('features.ovenSafe')],
      materials: [t('materials.ceramic')],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-display text-foreground">
              {t('products.title')}
            </h1>
            <p className="text-elegant max-w-2xl mx-auto">
              {t('products.subtitle')}
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>Filtros</span>
              </Button>
              <span className="text-sm text-muted-foreground">
                {allProducts.length} productos
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="p-2">
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;