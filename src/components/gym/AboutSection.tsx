import { motion } from "framer-motion";
import { Target, Users, Award, Clock } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower individuals to achieve their fitness goals through expert guidance and a supportive community.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Join a tribe of like-minded individuals who push each other to be their best every single day.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Over 10,000 transformations and counting. Our members don't just train – they transform.",
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Train on your schedule. Our facility is open around the clock to fit your lifestyle.",
    },
  ];

  return (
    <section id="about" className="section-container bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">
          About PowerFit
        </span>
        <h2 className="section-title mt-4">
          More Than Just A <span className="text-neon-gradient">Gym</span>
        </h2>
        <p className="section-subtitle">
          Founded in 2015, PowerFit has been transforming lives through fitness. 
          We believe in pushing boundaries, breaking limits, and building champions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-card p-6 text-center card-hover group"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <feature.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3">
              {feature.title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Story Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
            alt="Gym facility"
            className="rounded-xl w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-xl" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-display font-bold">10+ Years</div>
                <div className="text-sm text-muted-foreground">Of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Where Champions Are <span className="text-neon-gradient">Made</span>
          </h3>
          <p className="text-muted-foreground mb-6">
            PowerFit started with a simple vision: create a space where everyone, 
            regardless of their fitness level, can transform their body and mind. 
            What began as a small 2,000 sq ft gym has grown into a 25,000 sq ft 
            state-of-the-art fitness facility.
          </p>
          <p className="text-muted-foreground mb-8">
            Our philosophy is simple – we focus on transformation, not just exercise. 
            Every piece of equipment, every class, and every trainer is carefully 
            selected to help you achieve results that last a lifetime.
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-primary rounded-full" />
              <span className="text-sm font-medium">Premium Equipment</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-primary rounded-full" />
              <span className="text-sm font-medium">Expert Trainers</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-primary rounded-full" />
              <span className="text-sm font-medium">Nutrition Support</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
