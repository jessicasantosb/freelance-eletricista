"use client";

import { Easing, Variants } from "motion/react";

export type FadeInVariantsType = {
  duration?: number;
  delay?: number;
  ease?: Easing;
};

export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    transform: "translateY(100%)",
  },
  visible: ({ duration, delay, ease }: FadeInVariantsType) => ({
    opacity: 1,
    transform: "translateY(0)",
    transition: { duration, delay, ease },
  }),
};
