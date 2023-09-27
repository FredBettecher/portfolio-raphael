export function Galleries() {
  const galleryStyle = "w-[30rem] h-[12rem] rounded border border-[#e0e0e0] cursor-pointer shadow-sm shadow-[#e0e0e0] overflow-hidden relative flex items-center justify-center";
  const imgStyle = "max-w-full max-h-full m-auto block"
  const titleStyle = "font-bold text-custom-black absolute top-0 left-0 w-full h-full flex items-center justify-center bg-custom-white/[0.6] translate-y-5 duration-[600ms] opacity-0 hover:opacity-100 hover:translate-y-0";

  return (
    <div className="mt-8 flex justify-around">
      <div className={galleryStyle}>
        <img className={imgStyle} src="/images/pictures.png" alt="Fotos e Videos"/>
        <h2 className={titleStyle}>Galeria de Fotos e Vídeos</h2>
      </div>
      <div className={galleryStyle}>
        <img className={imgStyle} src="/images/texts.png" alt="Textos"/>
        <h2 className={titleStyle}>Galeria de Textos</h2>
      </div>
    </div>
  );
}
