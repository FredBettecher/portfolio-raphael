export function CallToAction() {
  const textStyle = "mb-8 text-[#e0e0e0]";
  const btnStyle = "inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 font-bold leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]";

  return (
    <div className="mt-6">
      <p className={textStyle}>
        Essas vantagens são apenas uma amostra do que posso oferecer para <strong>impulsionar</strong> a comunicação do seu negócio ou projeto. Estou pronto para criar estratégias sob medida que farão sua marca se <strong>destacar</strong> no mercado digital.
      </p>
      <button type='button' className={btnStyle}>ENTRE EM CONTATO</button>
    </div>
  );
}
