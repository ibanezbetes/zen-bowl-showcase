import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  itemCount?: number;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  title,
  description,
  image,
  itemCount,
}) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-card-neutral">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-light mb-1">{title}</h3>
              {itemCount && (
                <p className="text-sm text-white/80">{itemCount} productos</p>
              )}
            </div>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        <h3 className="text-xl font-light tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CollectionCard;