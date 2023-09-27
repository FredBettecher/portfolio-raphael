import Link from "next/link";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";

export function SocialMedias() {
  const iconStyle = "text-4xl text-[#e0e0e0]";
  const iconTxtStyle = "ml-1 text-[#e0e0e0]";
  return (
    <>
    <div className="flex items-center justify-between w-full h-12 mt-4">
        <Link href={`https://www.instagram.com/rapha_raj/`} target="_blank" className="flex items-center cursor-pointer transition ease-in-out duration-75 active:scale-95">
        <IoLogoInstagram className={iconStyle}/>
        <p className={iconTxtStyle}>Instagram</p>
        </Link>
        <Link href={`https://wa.me/5521989375318`} target="_blank" className="flex items-center cursor-pointer transition ease-in-out duration-75 active:scale-95">
        <IoLogoWhatsapp className={iconStyle}/>
        <p className={iconTxtStyle}>Whatsapp</p>
        </Link>
        <Link href={`https://www.linkedin.com/in/raphael-barbosa-808240177/`} target="_blank" className="flex items-center cursor-pointer transition ease-in-out duration-75 active:scale-95">
        <IoLogoLinkedin className={iconStyle}/>
        <p className={iconTxtStyle}>LinkedIn</p>
        </Link>
      </div>
    </>
  );
}
