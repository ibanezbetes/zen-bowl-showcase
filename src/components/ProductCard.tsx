import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  features: string[];
  materials: string[];
  promotion?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  originalPrice,
  image,
  features,
  materials,
  promotion,
}) => {
  const { t } = useLanguage();

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-card-neutral">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {promotion && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {promotion}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Product Info */}
        <div>
          <h3 className="text-xl font-light tracking-tight text-foreground mb-2">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-accent text-accent-foreground border-0"
            >
              {feature}
            </Badge>
          ))}
        </div>

        {/* Materials */}
        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
          {materials.map((material, index) => (
            <div key={index} className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
              <span>{material}</span>
            </div>
          ))}
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-medium text-foreground">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
          <Button variant="outline" size="sm" className="text-xs">
            {t('products.viewDetails')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;