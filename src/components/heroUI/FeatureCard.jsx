import { motion } from "framer-motion";
import { fadeUp } from "../../utils/motion";

export default function FeatureCard({ img, title, subtitle }) {
  return (
    <motion.div
      className="relative h-37.5 w-28 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md sm:h-41.25 sm:w-30"
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <img
        src={img}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />

      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-[13px] font-semibold leading-tight text-white">
          {title}
        </p>
        {subtitle ? (
          <p className="mt-0.5 text-[11px] leading-tight text-white/85">
            {subtitle}
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}
