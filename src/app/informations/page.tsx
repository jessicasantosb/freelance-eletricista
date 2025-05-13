import {
  BadgeCheck,
  HandCoins,
  InfoIcon,
  MapPinHouse,
  Zap,
} from "lucide-react";

import { TalkToMeButton } from "@/components/shared/button";
import { Title } from "@/components/ui/title";

export const metadata = {
  title: "Informações",
  description: "",
};

export default function Informations() {
  return (
    <main className="min-h-[70dvh] max-w-[70%] mx-auto pt-8 px-4 text-center flex flex-col items-center">
      <Title>
        <span className="md:hidden">{<InfoIcon />}</span>
        Informações sobre meu serviço
      </Title>

      <div className="py-8 text-xl md:text-2xl [&>*]:flex [&>*]:gap-2 [&>*]:items-center [&>*]:m-4 [&>*]:min-h-14 md:[&>*]:min-h-16 [&>*]:px-4 [&>*]:border-2 [&>*]:shadow-md [&>*]:shadow-[#C88A04]">
        <p>
          <Zap /> Atendimento rápido
        </p>
        <p>
          <BadgeCheck /> Garantia de serviço
        </p>
        <p>
          <MapPinHouse /> Belo Horizonte e região
        </p>
        <p>
          <HandCoins /> Pagamento em dinheiro ou PIX
        </p>
        <TalkToMeButton text="Entre em contato!" />
      </div>
    </main>
  );
}
