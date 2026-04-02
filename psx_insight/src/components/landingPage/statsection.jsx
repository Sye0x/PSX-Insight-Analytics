import { motion } from "framer-motion";

const stats = [
  {
    value: "12K+",
    label: "Strategies Tested",
    description:
      "Backtested across different market conditions to uncover what works.",
  },
  {
    value: "95%",
    label: "Simulation Accuracy",
    description:
      "Built with reliable market data to create realistic investing scenarios.",
  },
  {
    value: "300+",
    label: "Investor Profiles",
    description:
      "Explore multiple investing personalities and decision-making styles.",
  },
  {
    value: "24/7",
    label: "Market Insights",
    description:
      "Stay updated with performance metrics and trend tracking anytime.",
  },
];

function StatsSection() {
  return (
    <section className="w-full px-6 py-20 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Trusted by learners building
            <span className="text-buttonbg"> smarter investing habits</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/70 text-lg font-medium leading-relaxed">
            Measure growth through real numbers. Track progress, test ideas, and
            gain clarity with data-backed investing practice.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.96 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group rounded-2xl p-px bg-linear-to-br from-white/20 to-white/5 hover:from-white/40 hover:to-white/10"
            >
              <div className="rounded-2xl bg-background/80 backdrop-blur p-6 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 h-full">
                <h3 className="text-4xl md:text-5xl font-bold text-buttonbg">
                  {stat.value}
                </h3>
                <p className="mt-3 text-lg font-semibold text-foreground">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed font-medium text-foreground/60">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default StatsSection;
