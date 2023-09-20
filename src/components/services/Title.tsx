import { montserrat } from "@/assets/fonts";

export function Title() {
  const titleStyle = "text-2xl mb-8 font-bold italic";
  
  return (
    <h1 className={`${titleStyle} ${montserrat.className}`}>
      MEUS <span className="underline underline-offset-8">SERVIÇOS</span>
    </h1>
  );
}
