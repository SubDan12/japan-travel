import { motion } from "framer-motion";
import { fadeUp } from "../../utils/motion";

import Field from "./Field";

export default function MotionField(props) {
  return (
    <motion.div variants={fadeUp}>
      <Field {...props} />
    </motion.div>
  );
}
