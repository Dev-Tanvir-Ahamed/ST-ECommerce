import { Star, TrendingUp, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const statistics = [
  { icon: Users, label: "Active Users", value: 100000, suffix: "+" },
  { icon: Zap, label: "Tasks Completed", value: 5000000, suffix: "+" },
  { icon: Star, label: "Customer Satisfaction", value: 4.9, suffix: "/5" },
  { icon: TrendingUp, label: "Productivity Increase", value: 35, suffix: "%" },
];

const AnimatedValue = ({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const animationDuration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = value / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCurrentValue(Math.min(currentStep * stepValue, value));
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, animationDuration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {value % 1 === 0
        ? Math.round(currentValue).toLocaleString()
        : currentValue.toFixed(1)}
      {suffix}
    </span>
  );
};

export default function KeyStatistics() {
  return (
    <section className="bg-[#1F2937] py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Key Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 rounded-lg p-6 text-center transition-transform hover:scale-105"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-3xl font-bold text-blue-300">
                <AnimatedValue value={stat.value} suffix={stat.suffix} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
