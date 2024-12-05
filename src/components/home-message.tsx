import { MessageTrigger } from "@/components";

export function HomeMessage() {
  return (
    <div className="flex-1">
      <h1 className="pb-2 uppercase tracking-tighter text-5xl md:text-6xl font-bold ">
        Especialista em Serviços de{" "}
        <span className="text-yellow-600">Eletricidade</span> em Belo Horizonte
      </h1>
      <h3 className="pb-6 text-xl text-gray-500">
        Profissional Experiente e Treinado para Oferecer Atendimento de
        Excelência na Capital Mineira.
      </h3>
      <MessageTrigger />
    </div>
  );
}
