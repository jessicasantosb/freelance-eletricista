"use client";

import { CheckoutDialog } from "@/components/checkout/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function InfoButton() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <>
      <Button
        className="h-14 uppercase text-2xl bg-secondary shadow-2xl"
        onClick={() => setCheckoutOpen(true)}
      >
        Entre em contato agora mesmo!
      </Button>
      <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </>
  );
}
