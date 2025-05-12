import { Title } from "@/components/ui/title";
import { Workflow } from "lucide-react";

export const metadata = {
  title: "Sobre Mim",
  description:
    "",
};

export default function About() {
  return (
    <main className="container min-h-[70dvh] my-8 p-4">
      <Title>
        <span className="md:hidden">{<Workflow />}</span>
        Sobre mim
      </Title>
      
    </main>
  );
}
