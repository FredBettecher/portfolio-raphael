import { BsFillPenFill } from 'react-icons/bs'

export function Texts() {
  const boxStyle = "border-2 w-20 h-20 absolute z-10 transition ease-linear duration-200 hover:rotate-45";
  const iconStyle = "text-5xl absolute top-4 left-4";
  const sectionTitleStyle = "font-bold text-xl mb-2";
  const textStyle = "mb-1 text-[#e0e0e0]";

  return (
    <div>
      <div className="w-fit h-fit relative mb-24">
        <div className={boxStyle}></div>
        <BsFillPenFill className={iconStyle}/>
      </div>
      <h2 className={sectionTitleStyle}>
        Redação de Textos Chamativos
      </h2>
      <p className={textStyle}>
        Textos persuasivos que convertem visitantes em <strong>clientes</strong>, <br/>
        com conteúdos que se <strong>destacam</strong> nas redes sociais <br/>
        e uma comunicação mais <strong>autêntica</strong> com o público-alvo <br/>
      </p>
    </div>
  );
}
