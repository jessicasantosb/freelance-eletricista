import { Workflow } from "lucide-react";
import Image from "next/image";

import { TalkToMeButton } from "@/components/shared/button";
import { Title } from "@/components/ui/title";

export const metadata = {
  title: "Serviços",
  description: "",
};

export default function Services() {
  return (
    <main className="min-h-[70dvh] p-4">
      <Title>
        <span className="md:hidden">{<Workflow />}</span>
        Serviços Emergenciais
      </Title>
      <div className="pt-10 flex gap-4">
        <div className="flex flex-col justify-between items-center">
          <ul className="pb-8 pl-4 md:pl-12 text-xl lg:text-2xl list-disc [&>*]:pb-4">
            <li>Queda de energia parcial ou total</li>
            <li>Curto-circuito e disjuntores desarmando</li>
            <li>Troca e reparo de disjuntores queimados</li>
            <li>Fios derretidos ou superaquecimento na instalação</li>
            <li>Tomadas e interruptores com mau contato</li>
            <li>Identificação e correção de fuga de corrente</li>
            <li>Reparos em quadros de distribuição e fusíveis</li>
            <li>Troca de resistência de chuveiro e aquecedores</li>
            <li>Instalação emergencial de iluminação e tomadas</li>
          </ul>

          <TalkToMeButton text="Emergencia? Fale comigo!" />
        </div>
        <div className="hidden md:block relative flex-1 select-none">
          <Image
            alt="circuit"
            src={"/images/circuit.png"}
            fill
            className="absolute object-contain"
            sizes="auto"
            priority
          />
        </div>
      </div>
    </main>
  );
}
