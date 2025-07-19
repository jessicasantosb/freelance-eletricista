import { Workflow } from "lucide-react";
import Image from "next/image";
import * as motion from "motion/react-client";

import { TalkToMeButton } from "@/components/shared/button";
import { Title } from "@/components/ui/title";
import { services } from "data/services";
import {
  fromRightVariants,
  listVariants,
} from "@/components/shared/animation-variants";

export const metadata = {
  title: "Serviços",
  description: "",
};

export default function Services() {
  return (
    <main className="max-w-7xl mx-auto p-4 mb-8">
      <Title>
        <span className="md:hidden">{<Workflow />}</span>
        Serviços Emergenciais
      </Title>
      <div className="pt-10 flex gap-4">
        <div className="flex flex-col justify-between items-center">
          <ul className="pb-8 pl-4 md:pl-12 text-xl lg:text-2xl list-disc [&>*]:pb-4">
            {services.map((service, index) => (
              <motion.li
                key={index}
                custom={index}
                initial="hidden"
                animate={"visible"}
                variants={listVariants}
                transition={{ delay: index * 0.2 }}
              >
                {service}
              </motion.li>
            ))}
          </ul>
          <TalkToMeButton text="Emergência? Fale comigo!" />
        </div>
        <motion.div
          initial="hidden"
          animate={"visible"}
          variants={fromRightVariants}
          className="hidden md:block relative flex-1 select-none"
        >
          <Image
            alt="circuit"
            src={"/images/circuit.png"}
            fill
            className="absolute object-contain"
            sizes="auto"
            priority
          />
        </motion.div>
      </div>
    </main>
  );
}
