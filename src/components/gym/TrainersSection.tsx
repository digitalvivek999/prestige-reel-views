import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Trainer {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  quote: string | null;
  image_url: string | null;
}

const fallbackTrainers = [
  {
    id: "1",
    name: "Marcus Johnson",
    specialty: "Strength & Conditioning",
    experience: "12 years",
    quote: "Limits exist only in the mind.",
    image_url: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80",
  },
  {
    id: "2",
    name: "Sarah Chen",
    specialty: "HIIT & CrossFit",
    experience: "8 years",
    quote: "Every rep counts. Every drop of sweat matters.",
    image_url: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
  },
  {
    id: "3",
    name: "David Williams",
    specialty: "Personal Training",
    experience: "15 years",
    quote: "Your body can do it. It's your mind you need to convince.",
    image_url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    specialty: "Yoga & Flexibility",
    experience: "10 years",
    quote: "Balance is not something you find. It's something you create.",
    image_url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80",
  },
];

const TrainersSection = () => {
  const [trainers, setTrainers] = useState<Trainer[]>(fallbackTrainers);

  useEffect(() => {
    const fetchTrainers = async () => {
      const { data, error } = await supabase
        .from("trainers")
        .select("id, name, specialty, experience, quote, image_url")
        .order("sort_order");
      
      if (data && data.length > 0 && !error) {
        setTrainers(data);
      }
    };
    fetchTrainers();
  }, []);

  return (
    <section id="trainers" className="section-container bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">
          Expert Team
        </span>
        <h2 className="section-title mt-4">
          Meet Our <span className="text-neon-gradient">Mentors</span>
        </h2>
        <p className="section-subtitle">
          Our certified trainers bring passion, expertise, and dedication 
          to help you achieve your fitness goals faster.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trainers.map((trainer, index) => (
          <motion.div
            key={trainer.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src={trainer.image_url || "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80"}
                alt={trainer.name}
                className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              
              {/* Social Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Instagram className="w-5 h-5 text-primary-foreground" />
                </a>
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="glass-card p-4">
                  <h3 className="text-lg font-display font-semibold">
                    {trainer.name}
                  </h3>
                  <p className="text-primary text-sm font-medium">
                    {trainer.specialty}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    {trainer.experience} experience
                  </p>
                </div>
              </div>
            </div>
            
            {trainer.quote && (
              <p className="text-muted-foreground text-sm italic text-center px-2">
                "{trainer.quote}"
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrainersSection;
