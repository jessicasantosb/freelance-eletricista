import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image alt="logo" src={"/images/logo.svg"} width={40} height={25} />
      <h4 className="tracking-wider text-[#a9acb1] dark:text-[#d1d5db9f]">
        VALDIR MARQUES
      </h4>
    </div>
  );
}
