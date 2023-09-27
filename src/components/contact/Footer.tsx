import { roboto } from "@/assets/fonts";

export function Footer() {
  const footerStyle = "text-center text-[#e0e0e0]";

  return (
    <footer className={`${roboto.className} ${footerStyle}`}>
        Todos os direitos reservados &copy; 2023
    </footer>
  );
}
