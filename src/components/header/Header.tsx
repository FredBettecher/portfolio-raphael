import { montserrat } from "@/assets/fonts";

export function Header() {
  const headerStyle = "bg-transparent absolute z-10 top-0 w-full h-16 border-b flex justify-around items-center font-bold text-2xl";
  const navStyle = "cursor-pointer transition duration-75 ease-in-out active:scale-95";

  return (
    <header className={`${headerStyle} ${montserrat.className}`}>
      <nav className={navStyle}>INÍCIO</nav>
      <nav className={navStyle}>SOBRE MIM</nav>
      <nav className={navStyle}>SERVIÇOS</nav>
      <nav className={navStyle}>PORTFÓLIO</nav>
      <nav className={navStyle}>CONTATO</nav>
    </header>
  );
}
