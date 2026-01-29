import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Torres",
    role: "Lost 45 lbs in 6 months",
    quote: "PowerFit completely transformed my life. The trainers are incredibly supportive, and the community keeps you motivated. I've never felt stronger!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    name: "Jennifer Kim",
    role: "Marathon Runner",
    quote: "The variety of classes and the quality of equipment here is unmatched. My endurance has improved dramatically since joining.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    name: "David Chen",
    role: "Gained 20 lbs muscle",
    quote: "The personal training sessions are worth every penny. Marcus helped me achieve gains I never thought possible. This gym delivers results!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
  },
  {
    name: "Sarah Martinez",
    role: "Fitness Mom",
    quote: "As a busy mom, the 24/7 access is a game-changer. I can work out at 5 AM before the kids wake up. The childcare option is amazing too!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-container bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">
          Success Stories
        </span>
        <h2 className="section-title mt-4">
          Real <span className="text-neon-gradient">Transformations</span>
        </h2>
        <p className="section-subtitle">
          Don't just take our word for it. Hear from members who have 
          achieved incredible results with PowerFit.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-card p-6 card-hover relative"
          >
            {/* Quote Icon */}
            <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-primary fill-primary" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-muted-foreground mb-6 italic">
              "{testimonial.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <h4 className="font-display font-semibold">{testimonial.name}</h4>
                <p className="text-primary text-sm">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 glass-card p-8 max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10,000+", label: "Transformations" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "95%", label: "Member Retention" },
            { value: "500+", label: "5-Star Reviews" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-display font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
