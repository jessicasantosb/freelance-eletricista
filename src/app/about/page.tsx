import { User } from "lucide-react";
import Image from "next/image";

import { Title } from "@/components/ui/title";

export const metadata = {
  title: "Sobre Mim",
  description: "",
};

export default function About() {
  return (
    <main className="my-8 p-4">
      <Title>
        <span className="md:hidden">{<User />}</span>
        Sobre mim
      </Title>

      <div className="min-h-[70dvh] md:max-w-[70%] mx-auto pt-8 text-center flex justify-between gap-4">
        <div className="lg:w-[50%]">
          <h2 className="text-secondary tracking-widest text-3xl">
            Segurança é minha responsabilidade
          </h2>
          <p className="pt-8 text-xl leading-8">
            Olá! Sou um eletricista especializado em serviços residenciais e
            comerciais, pronto para atender suas necessidades elétricas com
            eficiência e segurança. Com anos de experiência, ofereço soluções
            personalizadas, desde instalações e manutenções até reparos
            emergenciais. Meu compromisso é garantir que sua casa ou empresa
            funcione perfeitamente, sempre respeitando as normas de segurança.
            Estou aqui para transformar sua experiência elétrica em algo
            tranquilo e confiável. Vamos juntos iluminar seu espaço!
          </p>
        </div>

        <div className="hidden lg:block relative flex-1 select-none">
          <Image
            alt="sobre mim"
            src={"/images/about.png"}
            fill
            className="absolute object-cover"
          />
        </div>
      </div>
    </main>
  );
}
