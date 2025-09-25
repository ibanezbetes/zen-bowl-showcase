import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
            </div>
            <span className="text-xl font-light tracking-tight text-foreground">
              Bowl Collection
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/productos" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/productos') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {t('nav.products')}
            </Link>
            <Link 
              to="/colecciones" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/colecciones') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {t('nav.collections')}
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="flex items-center space-x-1">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
            </div>

            {/* CTA Button */}
            <Button variant="default" size="sm" className="px-6">
              {t('nav.cta')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;