"use client";

import { ButtonHTMLAttributes, ReactNode, useState } from "react";

import { CheckoutDialog } from "../checkout/dialog";
import { Button } from "../ui/button";

type TalkToMeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const TalkToMeButton = ({
  text
}: {
  text: ReactNode;
}): TalkToMeButtonProps => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <>
      <Button
        className="h-14 md:h-16 uppercase text-2xl md:text-3xl bg-secondary shadow-2xl"
        onClick={() => setCheckoutOpen(true)}
      >
        {text}
      </Button>
      <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </>
  );
};
