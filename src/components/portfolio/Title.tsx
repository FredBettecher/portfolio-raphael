import { montserrat } from "@/assets/fonts";

export function Title() {
  const titleStyle = "text-2xl text-white font-bold";
  
  return (
    <h1 className={`${titleStyle} ${montserrat.className}`}>
      MEU <span className="underline underline-offset-8">PORTFÓLIO</span>
    </h1>
  );
}
