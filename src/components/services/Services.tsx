import { Title } from "./Title";
import { Videos } from "./Videos";
import { Texts } from "./Texts";
import { CallToAction } from "./CallToAction";

export function Services() {
  return (
    <section className="py-8 h-full w-auto text-justify px-16 flex justify-between">
      <div className="flex-col w-72">
        <Title />
        <CallToAction />
      </div>
      <div className="flex justify-between mt-14">
        <Videos />
        <Texts />
      </div>
    </section>
  );
}
