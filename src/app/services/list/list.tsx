"use client";

import { CheckoutDialog } from "@/components/checkout/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function List() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <div className="flex flex-col justify-between items-center">
      <ul className="pl-8 pb-8 text-xl lg:text-2xl list-disc [&>*]:pb-4">
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

      <Button
        className="h-14 uppercase text-2xl bg-secondary shadow-2xl"
        onClick={() => setCheckoutOpen(true)}
      >
        Emergencia? Fale comigo!
      </Button>
      <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </div>
  );
}
