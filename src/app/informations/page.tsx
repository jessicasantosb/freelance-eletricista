import {
  BadgeCheck,
  HandCoins,
  InfoIcon,
  MapPinHouse,
  Zap,
} from "lucide-react";
import * as motion from "motion/react-client";

import { TalkToMeButton } from "@/components/shared/button";
import { Title } from "@/components/ui/title";
import { listVariants } from "@/components/shared/animation-variants";

export const metadata = {
  title: "Informações",
  description: "",
};

type InformationsItemType = {
  icon: JSX.Element;
  label: string;
};

const informationsItem: InformationsItemType[] = [
  {
    icon: <Zap />,
    label: "Atendimento rápido",
  },
  {
    icon: <BadgeCheck />,
    label: "Garantia de serviço",
  },
  {
    icon: <MapPinHouse />,
    label: "Belo Horizonte e região",
  },
  {
    icon: <HandCoins />,
    label: "Pagamento em dinheiro ou PIX",
  },
];

export default function Informations() {
  return (
    <main className="min-h-[70dvh] max-w-7xl mx-auto pt-8 px-4 text-center flex flex-col items-center">
      <Title>
        <span className="md:hidden">{<InfoIcon />}</span>
        Informações sobre meu serviço
      </Title>

      <div className="py-8 text-xl md:text-2xl ">
        {informationsItem.map(({ icon, label }, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={"visible"}
            variants={listVariants}
            transition={{ delay: index * 0.2 }}
            className="[&>*]:flex [&>*]:gap-2 [&>*]:items-center [&>*]:m-4 [&>*]:min-h-14 md:[&>*]:min-h-16 [&>*]:px-4 [&>*]:border-2 [&>*]:shadow-md [&>*]:shadow-[#C88A04]"
          >
            <p>
              {icon}
              {label}
            </p>
          </motion.div>
        ))}
        <TalkToMeButton text="Entre em contato comigo!" />
      </div>
    </main>
  );
}
