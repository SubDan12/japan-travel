import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { fadeUp, stagger } from "../utils/motion"; // adjust path if needed

import MotionField from "./contactUI/MotionField";
import SocialIcon from "./heroUI/SocialIcon";

export default function Contacts() {
  const [state, handleSubmit] = useForm("mwvpygln"); 

  return (
    <section id="contacts" className="relative">
      <div className="relative mx-auto max-w-275 px-6 pt-12 pb-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          {/* Form */}
          <motion.div
            className="w-full max-w-130 rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            {state.succeeded ? (
              /* SUCCESS */
              <div className="py-10 text-center">
                <h3 className="text-[22px] font-semibold text-white">
                  Request sent 🎉
                </h3>
                <p className="mt-2 text-[13px] text-white/60">
                  We&apos;ll contact you shortly.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-[22px] font-semibold text-white/85">
                  Want to join us,
                  <br />
                  but still have questions?
                </h3>

                <p className="mt-3 text-[12px] text-white/60">
                  Leave a request
                </p>

                <motion.form
                  onSubmit={handleSubmit}
                  className="mt-6 space-y-4"
                  variants={stagger(0.08)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <MotionField name="name" placeholder="Your name" required />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />

                  <MotionField
                    name="phone"
                    placeholder="Phone number"
                    required
                  />
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                  />

                  <MotionField name="message" placeholder="Comment" multiline />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />

                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    className="mt-2 w-full rounded-xl bg-white/85 py-2.5 text-[13px] font-semibold text-black transition hover:bg-white disabled:opacity-50"
                    variants={fadeUp}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {state.submitting ? "Sending..." : "Send"}
                  </motion.button>
                </motion.form>
              </>
            )}
          </motion.div>

          {/* Right empty space (reference) */}
          <div className="hidden lg:block" />
        </div>

        {/* Footer */}
        <motion.div
          className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="flex items-center gap-3 text-white/80">
            <div className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/10">
              <span className="text-[12px]">🌐</span>
            </div>
            <span className="text-[12px] tracking-[0.2em]">JAPAN TOURS</span>
          </div>

          <nav className="flex items-center gap-8 text-[12px] text-white/55">
            <a href="#about" className="hover:text-white/85">
              About
            </a>
            <a href="#included" className="hover:text-white/85">
              Included
            </a>
            <a href="#contacts" className="hover:text-white/85">
              Contacts
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <SocialIcon src="/social/instagram.png" alt="Instagram" />
            <SocialIcon src="/social/facebook.png" alt="Facebook" />
            <SocialIcon src="/social/twitter.png" alt="Twitter" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
