'use client';

import { IoMailOutline } from "react-icons/io5";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

export function Email() {
  const emailSection = "w-[29.31rem] flex flex-col align-start mt-4";
  const iconStyle = "text-4xl text-[#e0e0e0]";
  const iconTxtStyle = "ml-1 text-[#e0e0e0]";
  const inputStyle = "bg-white text-[#1a1a1a] mb-2 pl-2 rounded border-none focus:ring-white placeholder:text-[#1a1a1a]";
  const btnStyle = "bg-white text-[#1a1a1a] rounded font-bold w-32 h-8 cursor-pointer hover:opacity-90 active:scale-95";

  const form: any = useRef();
  const service_id: string = String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
  const template_id: string = String(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
  const public_key: string = String(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(service_id, template_id, form.current, public_key)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
    <div className={emailSection}>
      <div className="flex items-center mb-4">
        <IoMailOutline className={iconStyle}/>
        <p className={iconTxtStyle}>E-mail</p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col">
        <input type="text" name="user_name" placeholder="Seu nome" className={`${inputStyle} w-80`}/>
        <input type="email" name="user_email" placeholder="Seu e-mail" className={`${inputStyle} w-80`}/>
        <textarea placeholder="Me diga como posso ajudar" name="message" className={`${inputStyle} w-[30rem] h-40`}/>
        <button className={btnStyle} type='submit' value="Send">ENVIAR</button>
      </form>
    </div>
    </>
  );
}
