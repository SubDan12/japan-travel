import { motion } from "framer-motion";
import { fadeUp } from "../../utils/motion";

import Field from "./Field";

export default function MotionField(props) {
  const MotionDiv = motion.div;

  return (
    <MotionDiv variants={fadeUp}>
      <Field {...props} />
    </MotionDiv>
  );
}
