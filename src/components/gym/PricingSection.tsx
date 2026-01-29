import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "29",
    period: "month",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Access to gym floor",
      "Locker room access",
      "Basic equipment usage",
      "Free WiFi",
      "1 Guest pass/month",
    ],
    isPopular: false,
  },
  {
    name: "Premium",
    price: "59",
    period: "month",
    description: "Most popular choice for serious fitness enthusiasts",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "Sauna & Steam room",
      "Nutrition consultation",
      "3 Guest passes/month",
      "Free protein shake bar",
    ],
    isPopular: true,
  },
  {
    name: "Elite",
    price: "99",
    period: "month",
    description: "Ultimate package for maximum transformation",
    features: [
      "Everything in Premium",
      "4 Personal training sessions",
      "Custom meal plans",
      "24/7 VIP access",
      "Unlimited guest passes",
      "Priority class booking",
      "Free merchandise",
    ],
    isPopular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-container bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">
          Membership Plans
        </span>
        <h2 className="section-title mt-4">
          Choose Your <span className="text-neon-gradient">Plan</span>
        </h2>
        <p className="section-subtitle">
          Flexible pricing options designed to fit your budget and fitness goals. 
          No hidden fees, cancel anytime.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative glass-card p-8 card-hover ${
              plan.isPopular ? "border-primary neon-border" : ""
            }`}
          >
            {plan.isPopular && (
              <div className="badge-popular">Most Popular</div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-display font-semibold mb-2">
                {plan.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {plan.description}
              </p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-display font-bold text-primary">
                  ${plan.price}
                </span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`block text-center w-full py-4 rounded-lg font-display font-semibold uppercase tracking-wider text-sm transition-all duration-300 ${
                plan.isPopular
                  ? "btn-neon"
                  : "btn-neon-outline"
              }`}
            >
              Start Training Today
            </a>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mt-12 text-muted-foreground text-sm"
      >
        <p>All plans include a 7-day money-back guarantee. Annual plans get 2 months free!</p>
      </motion.div>
    </section>
  );
};

export default PricingSection;
