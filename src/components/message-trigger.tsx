"use client";

import { useState } from "react";

import { CheckoutDialog } from "./checkout/dialog";
import { Button } from "./ui/button";

export function MessageTrigger() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <section className="text-center lg:text-left">
      <p className="text-2xl md:text-3xl pb-4">
        Anda sem tempo e precisa fazer aqueles{" "}
        <span className="text-secondary">reparos em sua casa ou empresa</span>? Deixe com
        quem entende!
      </p>
      <Button
        className="h-14 md:h-20 uppercase text-2xl md:text-4xl bg-secondary shadow-2xl"
        onClick={() => setCheckoutOpen(true)}
      >
        Fale Comigo
      </Button>
      <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </section>
  );
}
