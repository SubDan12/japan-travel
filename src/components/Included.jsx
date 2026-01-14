import { motion } from "framer-motion";
import { fadeUp, stagger } from "../utils/motion"; 

import GlassCard from "./includedUI/GlassCard";
import SectionTitle from "./includedUI/SectionTitle";

export default function Included() {
  const items = [
    {
      title: "Guides",
      desc: "2 awesome guides who know everything about Japan!",
      icon: "guide",
    },
    {
      title: "Flights",
      desc: "Routes:\nSan Francisco — Osaka\nTokyo — San Francisco",
      icon: "flight",
    },
    {
      title: "Transfers",
      desc: "From the airport to the hotels",
      icon: "transfer",
    },
    {
      title: "Hotels",
      desc: "Comfortable accommodation\n2 people per room\n(breakfasts included)",
      icon: "hotel",
    },
  ];

  return (
    <section id="included" className="bg-transparent">
      <div className="mx-auto max-w-275 px-6 py-16">
        {/* Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionTitle title="WHAT'S INCLUDED" />
        </motion.div>

        {/* Grid */}
        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {items.map((it) => (
            <GlassCard
              key={it.title}
              icon={it.icon}
              title={it.title}
              desc={it.desc}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
