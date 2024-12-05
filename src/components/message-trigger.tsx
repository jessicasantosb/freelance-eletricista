"use client";

import { useState } from "react";

import { CheckoutDialog } from "./checkout/dialog";
import { Button } from "./ui/button";

export function MessageTrigger() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <section>
      <p className="text-2xl pb-2">
        Precisa de um <span className="text-secondary">eletricista</span>? Estou
        aqui para ajudar!
      </p>
      <Button
        className="h-14 uppercase text-xl bg-secondary"
        onClick={() => setCheckoutOpen(true)}
      >
        Fale Comigo
      </Button>
      <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </section>
  );
}
