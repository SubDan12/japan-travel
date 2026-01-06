import { motion } from "framer-motion";
import { fadeUp } from "../../utils/motion";

import Icon from "./Icon";

export default function GlassCard({ icon, title, desc }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 px-6 py-6 backdrop-blur-md"
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {/* subtle inner highlight */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/10 to-transparent opacity-60" />

      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 bg-white/10">
            <Icon type={icon} />
          </div>
          <h3 className="text-[14px] font-semibold text-white/85">{title}</h3>
        </div>

        <p className="mt-4 whitespace-pre-line text-[12px] leading-relaxed text-white/65">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
