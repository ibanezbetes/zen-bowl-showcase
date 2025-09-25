import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Productos',
    'nav.collections': 'Colecciones',
    'nav.cta': 'Comprar ahora',
    
    // Hero Section
    'hero.title': 'Bowl Collection',
    'hero.subtitle': 'Explora nuestra colección de bowls que combina estilo y practicidad, perfectos para cualquier mesa.',
    'hero.cta': 'Explorar Colección',
    
    // Products
    'products.title': 'Nuestros Productos',
    'products.subtitle': 'Cada bowl está cuidadosamente diseñado para realzar tu experiencia gastronómica',
    'products.from': 'Desde',
    'products.viewDetails': 'Ver detalles',
    'products.promotion': 'Oferta de fin de semana: 15% desc.',
    
    // Product Names
    'product.minimalist.name': 'Bowl Minimalista',
    'product.minimalist.desc': 'Elegancia en su forma más pura. Perfecto para presentaciones modernas.',
    'product.ceramic.name': 'Bowl Cerámico Clásico',
    'product.ceramic.desc': 'Calidad artesanal con acabado suave y durabilidad excepcional.',
    'product.wooden.name': 'Bowl de Madera Natural',
    'product.wooden.desc': 'Calidez natural con vetas únicas que hacen cada pieza especial.',
    
    // Features
    'features.foodGrade': 'Apto para alimentos',
    'features.microwaveSafe': 'Apto microondas',
    'features.ovenSafe': 'Apto horno',
    'features.dishwasherSafe': 'Lavavajillas',
    
    // Collections
    'collections.title': 'Colecciones Destacadas',
    'collections.subtitle': 'Descubre nuestras colecciones cuidadosamente curadas',
    'collections.minimalist.title': 'Colección Minimalista',
    'collections.minimalist.desc': 'Líneas limpias y formas puras para espacios modernos',
    'collections.colorful.title': 'Colección Vibrante',
    'collections.colorful.desc': 'Colores audaces que aportan energía a tu mesa',
    'collections.classic.title': 'Colección Clásica',
    'collections.classic.desc': 'Diseños atemporales con elegancia tradicional',
    
    // Materials
    'materials.ceramic': 'Cerámica',
    'materials.wood': 'Madera',
    'materials.stainless': 'Acero inox.',
    
    // Footer
    'footer.contact': 'Contacto',
    'footer.email': 'info@bowlcollection.com',
    'footer.phone': '+34 123 456 789',
    'footer.followUs': 'Síguenos',
    'footer.rights': '© 2024 Bowl Collection. Todos los derechos reservados.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.collections': 'Collections',
    'nav.cta': 'Get in touch',
    
    // Hero Section
    'hero.title': 'Bowl Collection',
    'hero.subtitle': 'Explore our collection of bowls that combines style and practicality, perfect for any table.',
    'hero.cta': 'Explore Collection',
    
    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'Each bowl is carefully designed to enhance your dining experience',
    'products.from': 'From',
    'products.viewDetails': 'View details',
    'products.promotion': 'Special weekend: 15% off',
    
    // Product Names
    'product.minimalist.name': 'Minimalist Bowl',
    'product.minimalist.desc': 'Elegance in its purest form. Perfect for modern presentations.',
    'product.ceramic.name': 'Classic Ceramic Bowl',
    'product.ceramic.desc': 'Artisanal quality with smooth finish and exceptional durability.',
    'product.wooden.name': 'Natural Wood Bowl',
    'product.wooden.desc': 'Natural warmth with unique grains that make each piece special.',
    
    // Features
    'features.foodGrade': 'Food grade',
    'features.microwaveSafe': 'Microwave safe',
    'features.ovenSafe': 'Oven safe',
    'features.dishwasherSafe': 'Dishwasher safe',
    
    // Collections
    'collections.title': 'Featured Collections',
    'collections.subtitle': 'Discover our carefully curated collections',
    'collections.minimalist.title': 'Minimalist Collection',
    'collections.minimalist.desc': 'Clean lines and pure forms for modern spaces',
    'collections.colorful.title': 'Vibrant Collection',
    'collections.colorful.desc': 'Bold colors that bring energy to your table',
    'collections.classic.title': 'Classic Collection',
    'collections.classic.desc': 'Timeless designs with traditional elegance',
    
    // Materials
    'materials.ceramic': 'Ceramic',
    'materials.wood': 'Wood',
    'materials.stainless': 'Stainless',
    
    // Footer
    'footer.contact': 'Contact',
    'footer.email': 'info@bowlcollection.com',
    'footer.phone': '+34 123 456 789',
    'footer.followUs': 'Follow us',
    'footer.rights': '© 2024 Bowl Collection. All rights reserved.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};