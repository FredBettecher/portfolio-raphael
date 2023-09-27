import { montserrat } from "@/assets/fonts";

export function Title() {
  const titleStyle = "text-2xl mb-2 font-bold italic";

  return (
    <>
    <h1 className={`${titleStyle} ${montserrat.className}`}>
      FALE <span className="underline underline-offset-8">COMIGO</span>
    </h1>
    
    <p className="mb-2 text-[#e0e0e0]">
      Estou ansioso para trabalhar com você!</p>
    
    <p className="mb-2 text-[#e0e0e0]">
        Entre em contato comigo através de uma das formas abaixo que eu retornarei o mais breve possível.
    </p>
    </>
  );
}
