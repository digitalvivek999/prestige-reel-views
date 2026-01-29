import { motion } from "framer-motion";
import { useState } from "react";
import { Calculator, Scale, Flame, Target, ArrowRight } from "lucide-react";

// BMI Calculator Component
const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<{ bmi: number; category: string; tip: string } | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100; // cm to m
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      const bmi = w / (h * h);
      let category = "";
      let tip = "";

      if (bmi < 18.5) {
        category = "Underweight";
        tip = "Consider a nutrient-rich diet to reach a healthier weight. Our trainers can help!";
      } else if (bmi < 25) {
        category = "Normal";
        tip = "Great job maintaining a healthy weight! Keep up your fitness routine.";
      } else if (bmi < 30) {
        category = "Overweight";
        tip = "A combination of cardio and strength training can help you reach your ideal weight.";
      } else {
        category = "Obese";
        tip = "Start with low-impact exercises and work with our trainers for a personalized plan.";
      }

      setResult({ bmi: parseFloat(bmi.toFixed(1)), category, tip });
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Normal": return "text-primary";
      case "Underweight": return "text-blue-400";
      case "Overweight": return "text-yellow-400";
      case "Obese": return "text-red-400";
      default: return "text-foreground";
    }
  };

  return (
    <div className="glass-card p-6 card-hover">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
          <Scale className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-display font-semibold">BMI Calculator</h3>
          <p className="text-muted-foreground text-sm">Check your Body Mass Index</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g., 175"
            className="gym-input"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g., 70"
            className="gym-input"
          />
        </div>

        <button onClick={calculateBMI} className="btn-neon w-full">
          Calculate BMI
        </button>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-secondary rounded-lg"
          >
            <div className="text-center mb-3">
              <div className="text-4xl font-display font-bold text-primary">
                {result.bmi}
              </div>
              <div className={`text-lg font-semibold ${getCategoryColor(result.category)}`}>
                {result.category}
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center mb-4">{result.tip}</p>
            <a href="#contact" className="btn-neon-outline w-full text-center text-sm py-3">
              Book Free Fitness Consultation
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// Daily Calorie Calculator Component
const CalorieCalculator = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("medium");
  const [result, setResult] = useState<{ maintenance: number; fatLoss: number; muscleGain: number } | null>(null);

  const calculateCalories = () => {
    const a = parseFloat(age);
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (a > 0 && h > 0 && w > 0) {
      // Mifflin-St Jeor Equation
      let bmr = gender === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

      const activityMultipliers: { [key: string]: number } = {
        low: 1.2,
        medium: 1.55,
        high: 1.9,
      };

      const maintenance = Math.round(bmr * activityMultipliers[activity]);
      const fatLoss = Math.round(maintenance * 0.8);
      const muscleGain = Math.round(maintenance * 1.15);

      setResult({ maintenance, fatLoss, muscleGain });
    }
  };

  return (
    <div className="glass-card p-6 card-hover">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
          <Flame className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-display font-semibold">Daily Calorie Calculator</h3>
          <p className="text-muted-foreground text-sm">Find your daily calorie needs</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="25"
              className="gym-input"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="gym-input"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="175"
              className="gym-input"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="70"
              className="gym-input"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Activity Level</label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="gym-input"
          >
            <option value="low">Low (Sedentary)</option>
            <option value="medium">Medium (Moderate Exercise)</option>
            <option value="high">High (Intense Exercise)</option>
          </select>
        </div>

        <button onClick={calculateCalories} className="btn-neon w-full">
          Calculate Calories
        </button>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-secondary rounded-lg"
          >
            <div className="grid grid-cols-3 gap-3 text-center mb-4">
              <div className="p-3 bg-background/50 rounded-lg">
                <div className="text-xl font-display font-bold text-red-400">{result.fatLoss}</div>
                <div className="text-xs text-muted-foreground">Fat Loss</div>
              </div>
              <div className="p-3 bg-background/50 rounded-lg border border-primary">
                <div className="text-xl font-display font-bold text-primary">{result.maintenance}</div>
                <div className="text-xs text-muted-foreground">Maintain</div>
              </div>
              <div className="p-3 bg-background/50 rounded-lg">
                <div className="text-xl font-display font-bold text-blue-400">{result.muscleGain}</div>
                <div className="text-xs text-muted-foreground">Muscle Gain</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mb-4">
              *Calories are estimates. Individual needs may vary.
            </p>
            <a href="#contact" className="btn-neon-outline w-full text-center text-sm py-3">
              Get Custom Diet Plan
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// Ideal Body Weight Calculator Component
const IdealWeightCalculator = () => {
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");
  const [currentWeight, setCurrentWeight] = useState("");
  const [result, setResult] = useState<{ ideal: { min: number; max: number }; difference: number } | null>(null);

  const calculateIdealWeight = () => {
    const h = parseFloat(height);
    const current = parseFloat(currentWeight);

    if (h > 0) {
      // Robinson Formula
      const heightInInches = h / 2.54;
      const inchesOver5Feet = Math.max(0, heightInInches - 60);

      let idealBase = gender === "male"
        ? 52 + 1.9 * inchesOver5Feet
        : 49 + 1.7 * inchesOver5Feet;

      const min = Math.round(idealBase * 0.9);
      const max = Math.round(idealBase * 1.1);
      const difference = current > 0 ? Math.round(current - idealBase) : 0;

      setResult({ ideal: { min, max }, difference });
    }
  };

  return (
    <div className="glass-card p-6 card-hover">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
          <Target className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-display font-semibold">Ideal Body Weight</h3>
          <p className="text-muted-foreground text-sm">Find your target weight range</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="gym-input"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g., 175"
            className="gym-input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Current Weight (kg) <span className="text-muted-foreground">(optional)</span></label>
          <input
            type="number"
            value={currentWeight}
            onChange={(e) => setCurrentWeight(e.target.value)}
            placeholder="e.g., 75"
            className="gym-input"
          />
        </div>

        <button onClick={calculateIdealWeight} className="btn-neon w-full">
          Calculate Ideal Weight
        </button>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-secondary rounded-lg"
          >
            <div className="text-center mb-3">
              <div className="text-sm text-muted-foreground mb-1">Ideal Weight Range</div>
              <div className="text-3xl font-display font-bold text-primary">
                {result.ideal.min} - {result.ideal.max} kg
              </div>
            </div>

            {result.difference !== 0 && (
              <div className="text-center mb-3">
                <div className={`text-lg font-semibold ${result.difference > 0 ? "text-yellow-400" : "text-blue-400"}`}>
                  {result.difference > 0 ? `${result.difference} kg above` : `${Math.abs(result.difference)} kg below`} ideal range
                </div>
              </div>
            )}

            <p className="text-sm text-muted-foreground text-center mb-4">
              {result.difference > 5
                ? "You've got this! Every journey starts with a single step. 💪"
                : result.difference < -5
                ? "Consider a muscle-building program to reach your ideal weight."
                : "You're doing great! Keep maintaining your healthy lifestyle."}
            </p>

            <a href="#contact" className="btn-neon-outline w-full text-center text-sm py-3">
              Start Your Transformation Today
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// Main Calculators Section
const CalculatorsSection = () => {
  return (
    <section id="calculators" className="section-container bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">
          Free Tools
        </span>
        <h2 className="section-title mt-4">
          Fitness <span className="text-neon-gradient">Calculators</span>
        </h2>
        <p className="section-subtitle">
          Use our free fitness calculators to understand your body better 
          and set realistic goals for your transformation journey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          <BMICalculator />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <CalorieCalculator />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <IdealWeightCalculator />
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorsSection;
