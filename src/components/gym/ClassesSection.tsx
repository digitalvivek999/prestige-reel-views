import { motion } from "framer-motion";
import { Dumbbell, Users, Zap, Heart, Flame, Timer, PersonStanding } from "lucide-react";

const classes = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build lean muscle mass and increase strength with our comprehensive weightlifting programs.",
    duration: "60 min",
    level: "All Levels",
  },
  {
    icon: Users,
    title: "Personal Training",
    description: "One-on-one sessions tailored to your specific goals with certified personal trainers.",
    duration: "45-60 min",
    level: "All Levels",
  },
  {
    icon: Zap,
    title: "HIIT",
    description: "High-intensity interval training to maximize calorie burn and boost metabolism.",
    duration: "45 min",
    level: "Intermediate",
  },
  {
    icon: Flame,
    title: "Cardio Blast",
    description: "Heart-pumping cardio sessions designed to improve endurance and cardiovascular health.",
    duration: "50 min",
    level: "All Levels",
  },
  {
    icon: Heart,
    title: "Yoga & Flexibility",
    description: "Restore balance, improve flexibility, and find inner peace through guided yoga sessions.",
    duration: "60 min",
    level: "All Levels",
  },
  {
    icon: Timer,
    title: "CrossFit",
    description: "Functional fitness training combining strength, cardio, and agility for total body conditioning.",
    duration: "60 min",
    level: "Advanced",
  },
  {
    icon: PersonStanding,
    title: "Zumba",
    description: "Dance your way to fitness with high-energy Latin-inspired dance workouts.",
    duration: "55 min",
    level: "All Levels",
  },
];

const ClassesSection = () => {
  return (
    <section id="classes" className="section-container bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">
          Our Programs
        </span>
        <h2 className="section-title mt-4">
          Classes & <span className="text-neon-gradient">Training</span>
        </h2>
        <p className="section-subtitle">
          From high-intensity workouts to mindful movement, we offer programs 
          designed for every fitness goal and experience level.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {classes.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-card p-6 card-hover group relative overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 mb-4 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-display font-semibold mb-2">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between text-xs">
                <span className="px-3 py-1 bg-secondary rounded-full text-muted-foreground">
                  {item.duration}
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full">
                  {item.level}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mt-12"
      >
        <a href="#timetable" className="btn-neon-outline">
          View Full Schedule
        </a>
      </motion.div>
    </section>
  );
};

export default ClassesSection;
