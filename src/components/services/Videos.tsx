import { PiFilmSlateDuotone } from 'react-icons/pi';

export function Videos() {
  const sectionTitleStyle = "font-bold text-xl mb-2 flex items-center";
  const textStyle = "mb-1";

  return (
    <div>
      <PiFilmSlateDuotone />
      <h2 className={sectionTitleStyle}>
        Gravação e Edição de Vídeos:
      </h2>

      <p className={textStyle}>
        Vídeos <strong>cativantes</strong> e profissionais
      </p>
      
      <p className={textStyle}>
        Mensagens <strong>impactantes</strong> para engajar o público
      </p>
      
      <p className={textStyle}>
        <strong>Aumento</strong> da presença online da marca
      </p>
    </div>
  );
}
