import { motion } from "framer-motion";

export default function SocialIcon({ src, alt }) {
  return (
    <motion.a
      href="#"
      className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      <img src={src} alt={alt} className="h-4 w-4 opacity-90" />
    </motion.a>
  );
}
