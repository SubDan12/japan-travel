import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "../utils/motion"; // adjust path if needed

import FeatureCard from "./heroUI/FeatureCard";
import SocialIcon from "./heroUI/SocialIcon";

export default function Hero() {
  return (
    <section className="relative min-h-[72vh] sm:min-h-[90vh] overflow-hidden">
      {/* Background */}
      <img
        src="/images/hero.jpg"
        alt="Japan"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-linear-to-b from-black/10 via-black/35 to-black/90"
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.8 }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-275 px-6 pt-24 sm:pt-28">
        {/* JAPAN */}
        <motion.h1
          className="select-none whitespace-nowrap overflow-hidden text-[72px] font-semibold tracking-[0.16em] text-white/18 sm:text-[96px] sm:tracking-[0.18em] md:text-[150px] md:tracking-[0.20em] lg:text-[190px] lg:tracking-[0.24em] xl:text-[220px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          JAPAN
        </motion.h1>

        {/* Cards + Book */}
        <motion.div
          className="mt-8 flex flex-col gap-4 lg:mt-10 lg:flex-row lg:items-end lg:justify-between lg:gap-8"
          variants={stagger(0.09)}
          initial="hidden"
          animate="show"
        >
          {/* Cards group */}
          <motion.div
            className="flex items-end gap-4 overflow-x-auto pb-2 hide-scrollbar lg:overflow-visible lg:pb-0"
            variants={stagger(0.08)}
          >
            <FeatureCard
              img="/images/city.jpg"
              title="3 cities"
              subtitle="in Japan"
            />
            <FeatureCard img="/images/nature.jpg" title="10 days" subtitle="" />
            <FeatureCard
              img="/images/pagoda.jpg"
              title="gigabytes"
              subtitle="of photos"
            />
            <FeatureCard
              img="/images/ramen.jpg"
              title="eat ramen"
              subtitle=""
            />
            <FeatureCard
              img="/images/vibe.jpg"
              title="enjoy"
              subtitle="the vibe"
            />
          </motion.div>

          {/* Book button */}
          <motion.a
            href="#contacts"
            className="h-13 w-full rounded-2xl bg-white/80 text-center text-[16px] font-semibold leading-13 text-black shadow-sm hover:bg-white lg:w-57.5 lg:shrink-0 lg:text-[18px]"
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
          >
            Book
          </motion.a>
        </motion.div>
      </div>

      {/* Social icons */}
      <div className="absolute left-0 top-0 hidden w-full lg:block">
        <div className="relative mx-auto max-w-275 px-6">
          <motion.div
            className="absolute right-0 top-52"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex flex-col items-center gap-6">
              <SocialIcon src="/social/instagram.png" alt="Instagram" />
              <SocialIcon src="/social/facebook.png" alt="Facebook" />
              <SocialIcon src="/social/twitter.png" alt="Twitter" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
