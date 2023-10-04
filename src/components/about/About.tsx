import { montserrat } from "@/assets/fonts";
import Image from "next/image";

export function AboutMe() {
  const titleStyle = "text-2xl text-white mb-4 font-bold"
  const textStyle = "text-[#e0e0e0] mb-2 text-justify";
  const imgStyle = "rounded w-auto h-auto";
  
  return (
    <section className="h-full w-auto pt-8 flex justify-around">
      <div className="w-[35%]">
        <Image src={'/images/about-me.png'} alt="about-me-image" width={500} height={500} className={imgStyle}/>
      </div>

      <div className="max-w-xl">
        <h1 className={`${titleStyle} ${montserrat.className}`}>
          QUEM É <span className="underline underline-offset-8">RAPHAEL</span>?
        </h1>
        <p className={textStyle}>
          Olá, meu nome é Rapha, tenho 27 anos e sou formado em Marketing pela Faculdade UNIFAEL. Atualmente, atuo como redator e criador de conteúdos na Secretaria de Comunicação da Prefeitura de Magé.
        </p>
        <p className={textStyle}>
          Anteriormente, tive a oportunidade de trabalhar na Secretaria de Estado de Saúde do Rio de Janeiro, entre julho de 2022 e março de 2023. Nessa função, desempenhei um papel fundamental na promoção da saúde e disseminação do conhecimento para a população fluminense, contribuindo para aumentar a presença positiva do órgão e reduzir consideravelmente as críticas negativas.
        </p>
        <p className={textStyle}>
          Antes de me dedicar à redação, fui produtor de conteúdo na agência Flox, onde trabalhei com redes sociais de artistas da música, como Preta Gil, Malia, Lelê, entre outros clientes. Nessa posição, era responsável pela elaboração de textos, edição de imagens e vídeos.
        </p>
        <p className={textStyle}>
          Em 2020, fundei o Coletivo Vira-Lata, que teve a honra de ser selecionado no Edital de Enfrentamento à Covid-19, promovido pela Fiocruz, em 2021. Essa experiência possibilitou a produção de um mini documentário sobre o projeto intitulado &quot;Pavuna Contra Fome&quot;. Essa iniciativa, em parceria com a organização Luta Pela Paz, surgiu em meio à pandemia, com o propósito de impactar diretamente na segurança alimentar das famílias vulneráveis da Pavuna e Favelas da região. Ao longo dessa ação, conseguimos distribuir 4410 Kg de alimentos, proporcionando auxílio e esperança para essas comunidades.
        </p>
        <p className={textStyle}>
          Fico feliz em compartilhar mais sobre meu trabalho e como posso colaborar com o seu projeto ou empresa. Vamos juntos levar sua mensagem ao mundo de forma memorável!
        </p>
      </div>
    </section>
  );
}
