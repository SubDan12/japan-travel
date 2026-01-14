import { motion } from "framer-motion";
import { fadeUp, stagger } from "../utils/motion"; 

import SectionTitle from "./aboutUI/SectionTitle";
import Dot from "./aboutUI/Dot";
import Label from "./aboutUI/Label";
import Photo from "./aboutUI/Photo";
import StackedImages from "./aboutUI/StackedImages";
import MobileStop from "./aboutUI/MobileStop";

export default function About() {
  return (
    <section id="about" className="bg-black">
      <div className="mx-auto max-w-275 px-6 pt-12 pb-28 md:py-24 md:pb-24">
        {/* Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionTitle title="ABOUT THE TOUR" />
        </motion.div>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-14">
          {/* Left text */}
          <motion.div
            className="space-y-8 lg:space-y-32 text-white/70"
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.p
              className="max-w-sm text-[14px] leading-relaxed"
              variants={fadeUp}
            >
              We&apos;ve planned a simple and convenient 10-day itinerary for
              your trip to Japan. You&apos;ll visit three cities: Osaka, Kyoto,
              and Tokyo.
            </motion.p>

            <motion.p
              className="max-w-sm text-[14px] leading-relaxed"
              variants={fadeUp}
            >
              No need to worry about routes, schedules, or finding places —
              everything is already organized. We&apos;ll show you where to go,
              what to see, and where to eat, so you can simply enjoy the
              journey.
            </motion.p>
          </motion.div>

          {/* Right side */}
          <div className="relative">
            {/* Mobile/tablet timeline */}
            <motion.div
              className="space-y-6 lg:hidden"
              variants={stagger(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <MobileStop
                days="Days 1–3"
                city="Osaka"
                images={[
                  "/images/osaka1.jpg",
                  "/images/osaka2.jpg",
                  "/images/osaka3.jpg",
                ]}
              />
              <MobileStop
                days="Days 4–6"
                city="Kyoto"
                images={["/images/kyoto1.jpg"]}
              />
              <MobileStop
                days="Days 7–10"
                city="Tokyo"
                images={["/images/tokyo1.jpg"]}
              />
            </motion.div>

            {/* Desktop timeline */}
            <motion.div
              className="hidden lg:block"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative h-90 w-full max-w-130">
                {/* vertical line */}
                <div className="absolute left-65 top-2.5 h-85 w-px bg-white/25" />

                {/* ===== OSAKA ===== */}
                <Dot y={22} />
                <Label side="left" y={8} days="Days 1-3" city="Osaka" />

                <div className="absolute left-8 top-4.5">
                  <StackedImages
                    a="/images/osaka1.jpg"
                    b="/images/osaka2.jpg"
                  />
                </div>

                <div className="absolute left-88.75 top-3">
                  <Photo src="/images/osaka3.jpg" size="sm" />
                </div>

                {/* ===== KYOTO ===== */}
                <Dot y={165} />
                <Label side="right" y={150} days="Days 4-6" city="Kyoto" />

                <div className="absolute left-87.5 top-38.75">
                  <Photo src="/images/kyoto1.jpg" size="md" />
                </div>

                {/* ===== TOKYO ===== */}
                <Dot y={292} />
                <Label side="left" y={277} days="Days 7-10" city="Tokyo" />

                <div className="absolute left-8 top-71.25">
                  <Photo src="/images/tokyo1.jpg" size="md" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

