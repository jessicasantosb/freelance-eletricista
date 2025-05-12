import { MessageTrigger } from "@/components";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";

export function HomeMessage() {
  return (
    <div className="flex-1 ">
      <div className="mb-6 flex flex-col lg:flex-row items-center">
        <div className="flex flex-col justify-between items-center">
          <h1 className="pb-4 lg:pb-0 uppercase font-bold flex flex-col items-center gap-2 lg:items-start text-5xl md:text-7xl lg:text-9xl">
            <span className="tracking-wider">
              Eletricista
            </span>
            <span className="text-secondary tracking-widest flex items-center gap-2">
              <FaRegClock /> 24 horas
            </span>
            <span className="tracking-tighter text-4xl md:text-[3.40rem] lg:text-8xl">
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
