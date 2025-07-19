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

export const fromBottomVariants: Variants = {
  hidden: {
    opacity: 0,
    transform: "translateY(30%)",
  },
  visible: () => ({
    opacity: 1,
     transform: "translateY(0)",
    transition: { duration: 0.5, delay: 0.2, ease: "easeIn" },
  }),
};

export const fromRightVariants: Variants = {
  hidden: {
    opacity: 0,
    transform: "translateX(100%)",
  },
  visible: () => ({
    opacity: 1,
    transform: "translateX(0)",
    transition: { duration: 0.6, delay: 0.5, ease: "linear" },
  }),
};

export const fromLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    transform: "translateX(-100%)",
  },
  visible: () => ({
    opacity: 1,
    transform: "translateX(0)",
    transition: { duration: 0.6, delay: 0.5, ease: "linear" },
  }),
};

export const listVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: (custom + 1) / 5,
      duration: 0.5,
    },
  }),
};