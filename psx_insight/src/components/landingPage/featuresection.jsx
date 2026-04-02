import { motion } from "framer-motion";

function FeatureSection() {
  return (
    <section className="w-full min-h-screen flex justify-center px-6 py-20 bg-linear-to-b from-background to-muted/40">
      <div className="max-w-6xl w-full">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center mb-26"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Skills & intuition will grow with experience
          </h1>

          <p className="text-foreground/70 text-lg leading-relaxed font-semibold">
            Experience is the foundation of mastery. With practice and
            real-world challenges, your understanding deepens and your instincts
            sharpen. Over time, what once felt difficult becomes second nature.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          <FeatureCard
            icon="avatars.png"
            heading="Personalized Avatars"
            detail="Craft stunning avatars that reflect your style and stand out across platforms."
          />

          <FeatureCard
            icon="analytics.png"
            heading="Live Insights"
            detail="Monitor key metrics in real-time and stay ahead with data-driven decisions."
          />

          <FeatureCard
            icon="outcome.png"
            heading="Smart Reporting"
            detail="Turn complex data into simple, shareable reports in just a few clicks."
          />
        </motion.div>
      </div>
    </section>
  );
}

export default FeatureSection;

function FeatureCard({ icon, heading, detail }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group rounded-2xl p-px bg-linear-to-br from-white/20 to-white/5 hover:from-white/40 hover:to-white/10"
    >
      <div className="rounded-2xl bg-background/80 backdrop-blur p-6 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 flex flex-col gap-4">
        {/* Heading */}
        <h3 className="text-lg font-semibold text-foreground">{heading}</h3>

        {/* Text */}
        <p className="text-sm leading-relaxed font-semibold text-foreground/60">
          {detail}
        </p>

        {/* Button */}
        <motion.button
          whileTap={{ scale: 1.1 }}
          className="bg-buttonbg text-white p-2.5 rounded-2xl w-fit cursor-pointer"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
}
