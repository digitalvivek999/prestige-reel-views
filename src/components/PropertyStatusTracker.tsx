import { motion } from "framer-motion";
import { Check, Circle, Clock, FileText, Key, Home } from "lucide-react";

interface StatusStep {
  id: number;
  title: string;
  description: string;
  date: string;
  status: "completed" | "current" | "upcoming";
  icon: React.ElementType;
}

const statusSteps: StatusStep[] = [
  {
    id: 1,
    title: "Property Listed",
    description: "Exclusive listing published with premium marketing",
    date: "January 15, 2024",
    status: "completed",
    icon: Home,
  },
  {
    id: 2,
    title: "Documentation Ready",
    description: "All legal documents and floor plans prepared",
    date: "January 22, 2024",
    status: "completed",
    icon: FileText,
  },
  {
    id: 3,
    title: "Private Showings",
    description: "Exclusive tours for qualified buyers",
    date: "Ongoing",
    status: "current",
    icon: Clock,
  },
  {
    id: 4,
    title: "Offer Review",
    description: "Evaluation of submitted proposals",
    date: "Pending",
    status: "upcoming",
    icon: Circle,
  },
  {
    id: 5,
    title: "Closing",
    description: "Final transaction and key handover",
    date: "Pending",
    status: "upcoming",
    icon: Key,
  },
];

const PropertyStatusTracker = () => {
  return (
    <section id="status" className="py-24 px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Transaction Progress
          </span>
          <h2 className="text-4xl md:text-5xl font-display mt-4 mb-6">
            Property Status
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Status Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {statusSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
              }`}>
                <div className={`glass-card p-6 transition-all duration-500 hover:border-primary/30 ${
                  step.status === "current" ? "border-primary/50 shadow-lg shadow-primary/10" : ""
                }`}>
                  <div className={`flex items-center gap-3 mb-3 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    {step.status === "current" && (
                      <span className="px-3 py-1 text-xs tracking-widest uppercase bg-primary/20 text-primary rounded-full">
                        In Progress
                      </span>
                    )}
                    <span className="text-sm text-muted-foreground">{step.date}</span>
                  </div>
                  <h3 className="text-xl font-display mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>

              {/* Center Icon */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                  step.status === "completed" 
                    ? "bg-primary text-primary-foreground" 
                    : step.status === "current"
                    ? "glass border-2 border-primary text-primary"
                    : "glass text-muted-foreground"
                }`}>
                  {step.status === "completed" ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <step.icon className="w-6 h-6" />
                  )}
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-3rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyStatusTracker;
