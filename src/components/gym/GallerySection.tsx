import { motion } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    alt: "Main gym floor",
    category: "facility",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    alt: "Weight training area",
    category: "equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
    alt: "Group training session",
    category: "training",
  },
  {
    src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80",
    alt: "Cardio machines",
    category: "equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80",
    alt: "Boxing area",
    category: "training",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Yoga studio",
    category: "facility",
  },
];

const categories = ["All", "Facility", "Equipment", "Training"];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="gallery" className="section-container bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">
          Our Space
        </span>
        <h2 className="section-title mt-4">
          Gym <span className="text-neon-gradient">Gallery</span>
        </h2>
        <p className="section-subtitle">
          Take a virtual tour of our world-class facilities designed 
          to inspire peak performance.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
              activeFilter === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-foreground font-display font-semibold text-lg">
                {image.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
