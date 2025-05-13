"use client";

import { ComponentPropsWithRef, forwardRef, useState } from "react";

import { CheckoutDialog } from "../checkout/dialog";
import { Button } from "../ui/button";

type TalkToMeButtonProps = ComponentPropsWithRef<"button"> & {
  text: string;
};

export const TalkToMeButton = forwardRef<HTMLInputElement, TalkToMeButtonProps>(
  ({ className, type = "text", text, ...props }) => {
    const [checkoutOpen, setCheckoutOpen] = useState(false);

    return (
      <>
        <Button
          className="h-14 md:h-16 uppercase text-2xl md:text-3xl bg-secondary shadow-2xl"
          onClick={() => setCheckoutOpen(true)}
          {...props}
        >
          {text}
        </Button>
        <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
      </>
    );
  }
);

TalkToMeButton.displayName = "TalkToMeButton";
