import { motion } from 'motion/react';
import { 
  Droplet, 
  CircleStop, 
  Gauge, 
  CircleDot, 
  Zap, 
  Wind, 
  Cog, 
  Search,
  Clock,
  DollarSign
} from 'lucide-react';
import type { Service } from '../data/servicesData';

/**
 * Service Card Component
 * Displays individual service information with hover animations
 */

const iconMap: Record<string, any> = {
  Droplet,
  CircleStop,
  Gauge,
  CircleDot,
  Zap,
  Wind,
  Cog,
  Search
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
      >
        {Icon && <Icon className="w-8 h-8 text-primary" />}
      </motion.div>

      {/* Title */}
      <h3 className="text-xl text-white mb-2">{service.title}</h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 min-h-[60px]">
        {service.description}
      </p>

      {/* Price and Duration */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center gap-2 text-primary">
          <DollarSign className="w-4 h-4" />
          <span className="font-semibold">{service.price}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Clock className="w-4 h-4" />
          <span>{service.duration}</span>
        </div>
      </div>
    </motion.div>
  );
}
