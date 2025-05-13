import { PlugZap } from "lucide-react";
import Image from "next/image";

import { MessageTrigger } from "@/components";

export default function Home() {
  return (
    <div className="w-full p-6">
      <div className="mb-6 flex flex-col lg:flex-row items-center">
        <div className="flex flex-col justify-between items-center lg:items-start">
          <h1 className="pb-4 lg:pb-0 uppercase font-bold flex flex-col items-center gap-2 lg:items-start text-2xl md:text-5xl md:tracking-widest">
            Especialista em Serviços de{" "}
            <span className="text-secondary md:tracking-widest text-5xl md:text-8xl flex items-center">
              <PlugZap className="size-10 md:size-20" /> Eletricidade
            </span>
            <span className="md:tracking-tighter text-4xl md:text-8xl ">
              {" "}
              em Belo Horizonte
            </span>
          </h1>

          <h3 className="text-xl lg:text-2xl text-muted-foreground text-center lg:text-left flex flex-col">
            <span>
              Os melhores serviços em elétrica e instalações residenciais com
              preço justo!
            </span>
            <span>
              Confiança e segurança para resolver qualquer problema elétrico.
            </span>
          </h3>
        </div>

        <div className="relative size-64 lg:size-[29.5rem] select-none">
          <Image
            alt="ferramentas"
            src={"/images/avatar.png"}
            fill
            className="absolute object-cover rounded-full"
          />
        </div>
      </div>
      <MessageTrigger />
    </div>
  );
}
