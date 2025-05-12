import {HomeMessage } from "@/components";

export default async function Home() {
  return (
    <main className="w-full p-4 md:px-6">
      <div className="my-14 flex gap-6">
        <HomeMessage />
      </div>
    </main>
  );
}
