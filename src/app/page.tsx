import { Footer, Header, HomeMessage } from "@/components";

export default async function Home() {
  return (
    <main className="w-full px-4 py-10 md:p-10">
      <Header />
      <div className="my-14 flex gap-6">
        <HomeMessage />
      </div>
      <Footer />
    </main>
  );
}
