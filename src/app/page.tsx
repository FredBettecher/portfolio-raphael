import { Header } from "@/components/header/Header";
import { HomePage } from "@/components/home/Home";
import { AboutMe } from "@/components/about/About";
import { Services } from "@/components/services/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <Header />
      <HomePage />
      <AboutMe />
      <Services />
    </main>
  )
}
