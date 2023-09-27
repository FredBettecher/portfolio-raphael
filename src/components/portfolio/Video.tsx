export function Video({ source }: any) {
  return (
    <>
    <video controls className="w-[24rem] h-[12rem] border border-[#e0e0e0] rounded transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
      <source src={source} type="video/mp4" />
    </video>
    </>
  );
}
