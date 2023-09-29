import { Video } from "./Video";

export function Highlights() {
  return (
    <div className="border-b border-white flex flex-col pb-4">
      <h2 className="text-xl font-bold text-[#e0e0e0] mt-2 ml-4">Destaques</h2>
      <div className="flex mt-4 justify-around">
      <Video source='video1.mp4'/>
      <Video source='video2.mp4'/>
      </div>
    </div>
  );
}
