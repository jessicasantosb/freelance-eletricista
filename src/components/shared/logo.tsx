import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative size-7">
        <Image
          alt="logo"
          src={"/images/logo.svg"}
          fill
          className="absolute object-contain"
        />
      </div>
      <h4 className="tracking-wider text-[#a9acb1] dark:text-[#d1d5db9f]">
        VALDIR MARQUES
      </h4>
    </div>
  );
}
