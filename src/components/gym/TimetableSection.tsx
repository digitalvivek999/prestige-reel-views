import { motion } from "framer-motion";

const schedule = [
  {
    day: "Monday",
    classes: [
      { time: "6:00 AM", name: "Early Bird HIIT", trainer: "Sarah" },
      { time: "9:00 AM", name: "Yoga Flow", trainer: "Emily" },
      { time: "12:00 PM", name: "Lunch Crunch", trainer: "Marcus" },
      { time: "5:30 PM", name: "CrossFit", trainer: "David" },
      { time: "7:00 PM", name: "Zumba", trainer: "Emily" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "6:00 AM", name: "Strength Training", trainer: "Marcus" },
      { time: "9:00 AM", name: "Cardio Blast", trainer: "Sarah" },
      { time: "12:00 PM", name: "Power Yoga", trainer: "Emily" },
      { time: "5:30 PM", name: "HIIT Extreme", trainer: "Sarah" },
      { time: "7:00 PM", name: "Boxing Basics", trainer: "David" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "6:00 AM", name: "Early Bird HIIT", trainer: "Sarah" },
      { time: "9:00 AM", name: "Strength & Tone", trainer: "Marcus" },
      { time: "12:00 PM", name: "Express Cardio", trainer: "David" },
      { time: "5:30 PM", name: "CrossFit", trainer: "David" },
      { time: "7:00 PM", name: "Yoga Restore", trainer: "Emily" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { time: "6:00 AM", name: "Bootcamp", trainer: "Marcus" },
      { time: "9:00 AM", name: "Yoga Flow", trainer: "Emily" },
      { time: "12:00 PM", name: "Core Crusher", trainer: "Sarah" },
      { time: "5:30 PM", name: "Strength Training", trainer: "Marcus" },
      { time: "7:00 PM", name: "Zumba Party", trainer: "Emily" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "6:00 AM", name: "HIIT Extreme", trainer: "Sarah" },
      { time: "9:00 AM", name: "Cardio Dance", trainer: "Emily" },
      { time: "12:00 PM", name: "Lunch Lift", trainer: "David" },
      { time: "5:30 PM", name: "CrossFit", trainer: "David" },
      { time: "7:00 PM", name: "Yoga Unwind", trainer: "Emily" },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { time: "8:00 AM", name: "Weekend Warrior", trainer: "Marcus" },
      { time: "10:00 AM", name: "Family Fitness", trainer: "Sarah" },
      { time: "12:00 PM", name: "Open Gym", trainer: "-" },
    ],
  },
  {
    day: "Sunday",
    classes: [
      { time: "9:00 AM", name: "Sunrise Yoga", trainer: "Emily" },
      { time: "11:00 AM", name: "Recovery & Stretch", trainer: "Emily" },
      { time: "1:00 PM", name: "Open Gym", trainer: "-" },
    ],
  },
];

const TimetableSection = () => {
  return (
    <section id="timetable" className="section-container bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">
          Weekly Schedule
        </span>
        <h2 className="section-title mt-4">
          Class <span className="text-neon-gradient">Timetable</span>
        </h2>
        <p className="section-subtitle">
          Plan your week with our comprehensive class schedule. 
          All classes included with Premium and Elite memberships.
        </p>
      </motion.div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card overflow-hidden"
        >
          <div className="grid grid-cols-8 gap-px bg-border">
            {/* Header */}
            <div className="bg-primary/20 p-4 text-center font-display font-semibold text-sm uppercase tracking-wider">
              Time
            </div>
            {schedule.map((day) => (
              <div
                key={day.day}
                className="bg-primary/20 p-4 text-center font-display font-semibold text-sm uppercase tracking-wider"
              >
                {day.day}
              </div>
            ))}

            {/* Time Slots */}
            {["6:00 AM", "9:00 AM", "12:00 PM", "5:30 PM", "7:00 PM"].map((time) => (
              <>
                <div key={`time-${time}`} className="bg-card p-4 text-center text-sm text-muted-foreground font-medium">
                  {time}
                </div>
                {schedule.map((day) => {
                  const classItem = day.classes.find((c) => c.time === time);
                  return (
                    <div
                      key={`${day.day}-${time}`}
                      className={`bg-card p-3 text-center transition-colors hover:bg-primary/10 ${
                        classItem ? "" : "opacity-30"
                      }`}
                    >
                      {classItem ? (
                        <div>
                          <div className="text-sm font-medium text-foreground">
                            {classItem.name}
                          </div>
                          <div className="text-xs text-primary mt-1">
                            {classItem.trainer}
                          </div>
                        </div>
                      ) : (
                        <span className="text-xs text-muted-foreground">-</span>
                      )}
                    </div>
                  );
                })}
              </>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {schedule.map((day, index) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="glass-card overflow-hidden"
          >
            <div className="bg-primary/20 p-4 font-display font-semibold uppercase tracking-wider">
              {day.day}
            </div>
            <div className="divide-y divide-border">
              {day.classes.map((classItem) => (
                <div
                  key={`${day.day}-${classItem.time}`}
                  className="p-4 flex items-center justify-between"
                >
                  <div>
                    <div className="font-medium">{classItem.name}</div>
                    <div className="text-sm text-primary">{classItem.trainer}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {classItem.time}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimetableSection;
