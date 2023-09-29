import { IoMailOutline } from "react-icons/io5";

export function Email() {
  const emailSection = "w-[29.31rem] flex flex-col align-start mt-4";
  const iconStyle = "text-4xl text-[#e0e0e0]";
  const iconTxtStyle = "ml-1 text-[#e0e0e0]";
  const inputStyle = "bg-white text-[#1a1a1a] mb-2 pl-2 rounded border-none focus:ring-white placeholder:text-[#1a1a1a]";
  const btnStyle = "bg-white text-[#1a1a1a] rounded font-bold w-32 h-8 cursor-pointer hover:opacity-90 active:scale-95";

  return (
    <>
    <div className={emailSection}>
      <div className="flex items-center mb-4">
        <IoMailOutline className={iconStyle}/>
        <p className={iconTxtStyle}>E-mail</p>
      </div>
      <form className="flex flex-col">
        <input type="text" placeholder="Seu nome" className={`${inputStyle} w-80`}/>
        <input type="email" placeholder="Seu e-mail" className={`${inputStyle} w-80`}/>
        <textarea placeholder="Me diga como posso ajudar" className={`${inputStyle} w-[30rem] h-40`}/>
        <button className={btnStyle}>ENVIAR</button>
      </form>
    </div>
    </>
  );
}
