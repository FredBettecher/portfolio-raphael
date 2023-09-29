import { PiFilmSlateDuotone } from 'react-icons/pi';

export function Videos() {
  const boxStyle = "border-2 w-20 h-20 absolute z-10 transition ease-linear duration-200 hover:rotate-45";
  const iconStyle = "text-6xl absolute top-2 left-2";
  const sectionTitleStyle = "font-bold text-xl mb-2";
  const textStyle = "mb-1 text-[#e0e0e0]";

  return (
    <div className='mr-12'>
      <div className="w-fit h-fit relative mb-24">
        <div className={boxStyle}></div>
        <PiFilmSlateDuotone className={iconStyle}/>
      </div>
      <h2 className={sectionTitleStyle}>
        Gravação e Edição de Vídeos
      </h2>
      <p className={textStyle}>
        Vídeos <strong>cativantes</strong> e profissionais com <br />
        mensagens <strong>impactantes</strong> para engajar o público <br />
        e gerar um <strong>aumento</strong> da presença online da marca <br />
      </p>
    </div>
  );
}
