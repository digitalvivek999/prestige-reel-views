import { motion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";

interface VideoHeroProps {
  videoUrl: string;
  propertyName: string;
  propertyAddress: string;
  price: string;
  onScheduleTour: () => void;
}

const VideoHero = ({ 
  videoUrl, 
  propertyName, 
  propertyAddress, 
  price, 
  onScheduleTour 
}: VideoHeroProps) => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-8 py-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-display font-semibold tracking-wider text-gold-gradient">
              LUXE ESTATES
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase"
          >
            <a href="#gallery" className="text-foreground/70 hover:text-primary transition-colors duration-300">Gallery</a>
            <a href="#status" className="text-foreground/70 hover:text-primary transition-colors duration-300">Status</a>
            <a href="#documents" className="text-foreground/70 hover:text-primary transition-colors duration-300">Documents</a>
            <button onClick={onScheduleTour} className="luxury-button">
              Schedule Tour
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="space-y-6"
        >
          {/* Property Badge */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
              Exclusive Listing
            </span>
          </div>

          {/* Property Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-tight tracking-tight">
            {propertyName}
          </h1>

          {/* Address */}
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
            {propertyAddress}
          </p>

          {/* Price & CTA */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 pt-6">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground tracking-widest uppercase">Asking Price</p>
              <p className="text-4xl md:text-5xl font-display text-gold-gradient">{price}</p>
            </div>
            
            <div className="flex gap-4">
              <button onClick={onScheduleTour} className="luxury-button-primary">
                Schedule Private Tour
              </button>
              <button className="luxury-button flex items-center gap-2">
                <Play className="w-4 h-4" />
                View Film
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        onClick={scrollToContent}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Explore</span>
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VideoHero;
