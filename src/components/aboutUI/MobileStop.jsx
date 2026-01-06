import { motion } from "framer-motion";
import { fadeUp } from "../../utils/motion";

export default function MobileStop({ days, city, images = [] }) {
  return (
    <motion.div
      className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
      variants={fadeUp}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <p className="text-[12px] text-white/60">{days}</p>
      <p className="mt-1 text-[16px] font-semibold text-white/85">{city}</p>

      <div className="-mx-4 mt-4 flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
        {images.map((src) => (
          <div
            key={src}
            className="relative h-27 w-39 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/45 to-transparent" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
