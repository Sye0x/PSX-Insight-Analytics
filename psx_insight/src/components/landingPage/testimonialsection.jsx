import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ali Khan",
    role: "Beginner Investor",
    feedback:
      "This platform completely changed how I understand investing. The simulations helped me avoid real mistakes.",
    rating: 4,
  },
  {
    name: "Sarah Ahmed",
    role: "Finance Student",
    feedback:
      "I love how intuitive everything feels. The insights and reports make learning investing actually enjoyable.",
    rating: 5,
  },
  {
    name: "Usman Tariq",
    role: "Part-time Trader",
    feedback:
      "Being able to test strategies before risking money is a game changer. Highly recommended!",
    rating: 4,
  },
];

function TestimonialSection() {
  return (
    <section className="relative min-h-screen w-full px-6 bg-linear-to-b from-background via-background to-muted/40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-125 bg-buttonbg/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Trusted by people building
            <span className="text-buttonbg"> smarter investing habits</span>
          </h2>

          <p className="mt-5 text-foreground/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            See how learners, students, and aspiring investors use our platform
            to test ideas, improve decision-making, and build confidence before
            investing in the real world.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 45, scale: 0.96 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="group rounded-3xl p-px transition-all duration-300 
              bg-linear-to-br from-white/20 to-white/5 hover:from-white/40 hover:to-white/10"
            >
              <div
                className="rounded-3xl h-full backdrop-blur-xl p-6 md:p-7 
                shadow-lg transition-all duration-300 
                group-hover:-translate-y-2 group-hover:shadow-2xl ${
                bg-background/80"
              >
                {/* Top Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span
                        key={i}
                        className="text-buttonbg drop-shadow-sm text-2xl"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                {/* Feedback */}
                <p className="leading-relaxed text-foreground/70 text-xl md:text-[15px] font-medium">
                  “{item.feedback}”
                </p>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-white/10" />

                {/* User */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-buttonbg/15 border border-buttonbg/20 flex items-center justify-center text-buttonbg font-bold text-sm shadow-inner">
                    {item.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <div>
                    <p className="text-base font-semibold text-foreground">
                      {item.name}
                    </p>
                    <p className="text-sm text-foreground/55 font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialSection;
