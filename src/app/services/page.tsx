import { Title } from "@/components/ui/title";
import { Workflow } from "lucide-react";
import Image from "next/image";
import { List } from "./(list)/list";

export const metadata = {
  title: "Serviços",
  description: "",
};

export default function Services() {
  return (
    <main className="min-h-[70dvh] p-8">
      <Title>
        <span className="md:hidden">{<Workflow />}</span>
        Serviços Emergenciais
      </Title>
      <div className="pt-10 lg:ml-12 flex gap-4">
        <List />
        <div className="hidden md:block relative flex-1 select-none">
          <Image
            alt="circuit"
            src={"/images/circuit.png"}
            fill
            className="absolute object-contain"
          />
        </div>
      </div>
    </main>
  );
}
